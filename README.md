# echo "# cypress-jenkins" >> README.md
# git init
# git add README.md
# git commit -m "first commit"
# git branch -M master
# git remote add origin https://github.com/taili87/cypress-jenkins.git
# git push -u origin master
# Modify the branch
# C:\Users\ablay\OneDrive\Bureau\demo\cypress-typescript\cypress\reports\html\index.html
# How to fix Jenkins console log Encoding issue on window??
# Execute Jenkins {Minites} {Hour} {DayOfMonth} {Month} {DayOfWeek}
# JenkinsFile


pipeline{
    agent any 

    stages{
        stage("build"){
            steps{
               echo 'building the application'
            }
        }

        stage("test"){
            when{
                expression{
                    env.BRANCH_NAME == 'dev' && 'master' == true 
                }
            }
            steps{
                echo 'testing the application'
            }
        }

        stage("deploy"){
            steps{
                echo 'deploying the application'
            }
        }

        
    }
}

# This the JENKINSFILE 

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
