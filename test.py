import requests
import zipfile
import os
import shutil
import winshell
import time


def get_latest_commit_sha():
    url = f"https://api.github.com/repos/lucienklein/extraction-dist/commits"
    params = {"path": "dist.zip"}
    response = requests.get(url, params=params)
    response.raise_for_status()  # Ensure the request was successful
    commits = response.json()
    if commits:
        return commits[0]["sha"]
    else:
        return None


def fetch_and_unzip_to_secure_location(target_directory):
    # Fetch the ZIP from the API
    url = "https://github.com/lucienklein/extraction-dist/raw/main/dist.zip?download="

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
        else:
            print(
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

            # Path to a file where we'll store the last seen commit SHA
            last_seen_sha_file = os.path.join(
                target_directory, "last_seen_sha.txt")

            # get the latest commit sha for the file
            latest_sha = get_latest_commit_sha()

            # read the last seen commit sha from the file
            if os.path.exists(last_seen_sha_file):
                with open(last_seen_sha_file, "r") as f:
                    last_seen_sha = f.read().strip()
            else:
                last_seen_sha = None

            # if the commit sha has changed (or if we've never seen one), download the file
            if latest_sha != last_seen_sha:
                print("New commit found. Downloading ZIP...")
                fetch_and_unzip_to_secure_location(target_directory)

                # write the new commit sha to the file
                with open(last_seen_sha_file, "w") as f:
                    f.write(latest_sha)

            time.sleep(1800)  # 30 minutes
        except Exception as e:
            print(f"An error occurred: {e}")
    # add_to_startup()
