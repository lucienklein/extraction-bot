import os
import time
import subprocess
import urllib.request
import winshell

GIT_INSTALLER_URL = "https://github.com/git-for-windows/git/releases/download/v2.32.0.windows.1/Git-2.32.0-64-bit.exe"


def is_git_installed():
    try:
        subprocess.check_output(["git", "--version"])
        return True
    except:
        return False


def install_git():
    installer_path = "git_installer.exe"

    # Download Git installer
    urllib.request.urlretrieve(GIT_INSTALLER_URL, installer_path)

    # Run the installer silently
    os.system(
        f"{installer_path} /SILENT /COMPONENTS=\"icons,ext\\reg\\shellhere,assoc,assoc_sh\"")

    # Optionally, remove the installer after installation
    os.remove(installer_path)


def pull_every_hour(directory):
    while True:
        try:
            os.chdir(directory)
            subprocess.check_output(["git", "pull"])
        except Exception as e:
            print(f"Error: {e}")
        time.sleep(3600)  # Sleep for 1 hour


def add_to_startup():
    startup_folder = os.path.expanduser(
        '~\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup')
    exe_path = os.path.abspath(__file__)
    shortcut_path = os.path.join(startup_folder, "git_auto_pull.lnk")

    # Check if already added to startup
    if not os.path.exists(shortcut_path):
        winshell.CreateShortcut(
            Path=shortcut_path,
            Target=exe_path,
            Icon=(exe_path, 0),
            Description="Git Auto Pull"
        )


if __name__ == "__main__":
    if not is_git_installed():
        install_git()

    # add_to_startup()

    # Assuming the directory is "C:\\my_repo". This can be customized.
pull_every_hour(
    "C:\\Users\\lucien.klein\\Desktop\\Querco-Extraction\\Querco-Extraction")
