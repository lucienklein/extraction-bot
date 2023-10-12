import requests
import zipfile
import os
import shutil
import winshell
import time
import sentry_sdk


sentry_sdk.init(
    dsn="https://6e36dc77b085ea73566d7f7e8202c91a@o4505545038888960.ingest.sentry.io/4506036758511616",
)


def get_latest_version():
    url = "https://api.extraction.querco.co/extension"
    response = requests.get(url)
    response.raise_for_status()  # Ensure the request was successful
    data = response.json()
    if data and data['ok'] and 'version' in data['data'] and 'url' in data['data']:
        return data['data']['version'], data['data']['url']
    else:
        print("Unexpected response from server.")
        raise Exception("Unexpected response from server.")


def fetch_and_unzip_to_secure_location(target_directory, url):
    if url is None:
        print("No URL provided.")
        return False

    # Stream the request
    with requests.get(url, stream=True) as response:
        # Ensure the request was successful
        if response.status_code == 200:
            # Save the ZIP to a temporary file in chunks
            with open("temp.zip", "wb") as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

            # Extract the ZIP
            with zipfile.ZipFile("temp.zip", 'r') as zip_ref:
                zip_ref.extractall("temp_folder")

            # Determine the main directory inside the ZIP (ignoring __MACOSX and other unwanted dirs)
            contents = [item for item in os.listdir(
                "temp_folder") if item != "__MACOSX"]
            if len(contents) == 1:
                main_directory = os.path.join("temp_folder", contents[0])
            else:
                main_directory = "temp_folder"

            if not os.path.exists(target_directory):
                os.makedirs(target_directory)

            # Move the contents to the desired folder
            for item in os.listdir(main_directory):
                source = os.path.join(main_directory, item)
                destination = os.path.join(target_directory, item)
                if os.path.exists(destination):
                    if os.path.isdir(destination):
                        shutil.rmtree(destination)
                    else:
                        os.remove(destination)
                shutil.move(source, destination)

            # Cleanup: remove temporary ZIP and folder
            os.remove("temp.zip")
            shutil.rmtree("temp_folder")
            print("Successfully downloaded and extracted ZIP.")
            return True
        else:
            raise Exception(
                f"Failed to download ZIP. Status code: {response.status_code}")


def add_to_startup():
    startup_folder = os.path.expanduser(
        '~\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup')
    exe_path = os.path.abspath(__file__)
    shortcut_path = os.path.join(startup_folder, "your_script_name.lnk")

    # Check if already added to startup
    if not os.path.exists(shortcut_path):
        winshell.CreateShortcut(
            Path=shortcut_path,
            Target=exe_path,
            Icon=(exe_path, 0),
            Description="Your Script Description"
        )


if __name__ == "__main__":
    while True:
        try:
            target_directory = os.path.expanduser('~\\Querco-Extraction-Tool')

            # Path to a file where we'll store the last seen version
            last_seen_version_file = os.path.join(
                target_directory, "last_seen_version.txt")

            # get the latest version and download url
            latest_version, download_url = get_latest_version()

            # read the last seen version from the file
            if os.path.exists(last_seen_version_file):
                with open(last_seen_version_file, "r") as f:
                    last_seen_version = f.read().strip()
            else:
                last_seen_version = None

            # if the version has changed (or if we've never seen one), download the file
            if latest_version != last_seen_version:
                print("New version found. Downloading ZIP...")
                success = fetch_and_unzip_to_secure_location(
                    target_directory, download_url)

                # write the new version to the file only if download was successful
                if success:
                    with open(last_seen_version_file, "w") as f:
                        f.write(latest_version)

            time.sleep(1800)  # 30 minutes

        except KeyboardInterrupt:
            print("Interrupted by user. Exiting...")
            break

        except Exception as e:
            sentry_sdk.capture_exception(e)
            print(f"An error occurred: {e}")

    # add_to_startup()
