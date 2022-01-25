#!/usr/bin/env bash

# Set root dir.
if [ -n "$1" ]
then
  DIR=$1;
else
  echo "Please provide the root directory.";
  exit 1;
fi

# Login and configure connection to IBM Cloud COS.
ibmcloud login --apikey "${IBM_CLOUD_API_KEY}" --no-region;
ibmcloud cos config crn --crn "${IBM_CLOUD_RESOURCE_ID}";
ibmcloud cos config region --region us-geo;

echo "Uploading directory..."
for asset in `find ${DIR} -type f -printf "%P\n"`
do
  # Set root dir.
  if [ -n "$2" ]
  then
    ibmcloud cos upload --bucket ${IBM_CLOUD_BUCKET} --key $2/${asset} --file ${DIR}/${asset};
  else
    ibmcloud cos upload --bucket ${IBM_CLOUD_BUCKET} --key ${asset} --file ${DIR}/${asset};
  fi
done
