
pipeline{
    agent any 
    parameters{
        string (name: 'SPEC', defaultValue: "cypress/e2e/**/**", description:"Enter the scripts path you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description:"Choice of browser you want to use to execute the scripts")
    }

    options{
        anciColor('xterm')
    }

    stages{
        stage('Building){
            echo 'Building the application'
        }

        stage ('Testing'){
            steps{
                bat "npm i"
                bat "npm run cypress:run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage(''Deploying'){
            echo 'Deploying the application'
        }
    }

    post{
        always{
            publishHTML([allowMissing:false, alwaysLinkToLastBuild:false, keelAll: true, reportDir: 'cypress/report/html', reportFiles: 'index.html'])
        }
    }
}
