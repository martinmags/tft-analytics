# Create Virtual Environment
virtualenv venv

# Activate Virtual Environment
source venv/bin/activate

# Install Dependencies
pip install -r requirements.txt

# DEPLOYMENT TO AWS Elastic Beanstalk
Follow the general procedure mentioned in documentation or tutorial with a few notes
to keep in mind. Applications contain environments.

# Issue: 
When setting up elastic beanstalk, python 3.7 had issues. 
# Solution: 
Rolled back to eb python 3.6 platform

1. Zip all files in `backend-server` folder EXCEPT any .zip files.
# Note: I think it's already excluded as declared on the .ebignore file, but do so, just for reassurance.
2. Upload to environment.

# Note:
Keys are temporary, so if api endpoints aren't working,
you need to update key and redeploy on 'tft-analytics-env'
a new zip file and an updated project version 'project-v2.#'
