@app
example

@http
get /

@aws
profile ft
region us-east-1
bucket arc-example

@cdn
@static

@macros
arc-macro-lambda-slack
arc-macro-log-subscription

@logSubscription
function LambdaSlackHandler
filter ?error ?notice ?timeout ?"timed out"
retention 14
