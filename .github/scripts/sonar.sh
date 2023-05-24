#!/bin/bash
# set your SonarCloud project key and authentication token
# get the current version of the project
CURRENT_VERSION=$(curl -s -u "${SONAR_AUTH_TOKEN}:" "https://sonarcloud.io/api/project_analyses/search?project=${SONAR_PROJECT_KEY}&ps=1" | jq -r '.analyses[0].projectVersion')
echo $CURRENT_VERSION

# increment the project version number
INCREMENT_NUMBER=0.0.1
# NEW_VERSION=$((CURRENT_VERSION + 0.0.1 | bc))
NEW_VERSION=$(echo "$CURRENT_VERSION + $INCREMENT_NUMBER" | bc)
echo $NEW_VERSION
# call the SonarCloud API to update the project version
curl -u "${SONAR_AUTH_TOKEN}:" -X POST "https://sonarcloud.io/api/project_versions/set?project=${SONAR_PROJECT_KEY}&version=${NEW_VERSION}"