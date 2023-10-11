import os
import time
import subprocess


def is_git_installed():
    try:
        subprocess.check_output(["git", "--version"])
        return True
    except:
        return False


def install_git():
    # You can download and install Git using an installer or a package manager like Chocolatey.
    # For simplicity, let's use Chocolatey (assuming it's installed)
    os.system("choco install git -y")


def pull_every_hour(directory):
    while True:
        try:
            os.chdir(directory)
            subprocess.check_output(["git", "pull"])
        except Exception as e:
            print(f"Error: {e}")
        time.sleep(3600)  # Sleep for 1 hour


if __name__ == "__main__":
    if not is_git_installed():
        install_git()

    # Assuming the directory is "C:\\my_repo". This can be customized.
    pull_every_hour("C:\\my_repo")
