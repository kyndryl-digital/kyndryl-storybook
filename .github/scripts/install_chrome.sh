# chrome-browser
sudo apt-get update
sudo apt-get install -y wget
sudo apt-get install -y libasound2 libnspr4 libnss3 libxss1 xdg-utils unzip
sudo apt-get install -y libappindicator1 fonts-liberation
sudo apt-get install -y libappindicator3-1 libatk-bridge2.0-0 libatspi2.0-0 libgbm1 libgtk-3-0
sudo apt-get install -f
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo dpkg -i google-chrome*.deb
# chromedriver also needs to be installed.  
CHROME_VERSION=$(curl https://chromedriver.storage.googleapis.com/LATEST_RELEASE)
wget https://chromedriver.storage.googleapis.com/$CHROME_VERSION/chromedriver_linux64.zip
#wget http://chromedriver.storage.googleapis.com/2.45/chromedriver_linux64.zip
unzip chromedriver_linux64.zip
sudo mv chromedriver /usr/bin/chromedriver
sudo chown root:root /usr/bin/chromedriver  # questionable - may need to add other user permissions
sudo chmod +x /usr/bin/chromedriver
