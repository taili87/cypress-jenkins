
pipeline{
    agent any 
   
    parameters{
        string (name: 'SPEC', defaultValue: "cypress/e2e/**/**", description:"Enter the scripts path you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description:"Choice of browser you want to use to execute the scripts")
    }

    stages{
        stage('Building'){
             steps{
               echo 'building the application'
            }
           
        }

        stage ('Testing'){
            steps{
                bat "npm install"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying'){
            steps{
               echo 'starting Deployment'
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing:false, alwaysLinkToLastBuild:false, keelAll: true, reportDir: 'cypress/report/', reportFiles: 'index.html'])
        }
    }
}
