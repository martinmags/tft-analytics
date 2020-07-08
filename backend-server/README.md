# NOTE:
When setting up elastic beanstalk, python 3.7 had issues. 
Rolled back to eb python 3.6 platform
Keys are temporary, so if api endpoints aren't working,
you need to update key and redeploy on 'tft-analytics-env'
a new zip file and an updated project version 'project-v2.#'

# Create Virtual Environment
virtualenv venv

# Activate Virtual Environment
source venv/bin/activate

# Install Dependencies
pip install -r requirements.txt