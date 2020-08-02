# Introduction
  This sample application intends to show a simple grid with in which it has a Save Button per row. and the Grid will be populated from an external json file from a web site. and when clicking the save button in each row the corresponding rows will be persisted in DB
  
 #Prerequisites
 1) Very Basic knowledge of Angular 2+.
 2) Basic features used, httpclient, observables - subscribe (rxjs), component, service, built in pipes, reactive form module.
 3) Make sure the mandatory setups such as node, npm, angular cli installed in your machine and you are familiar with the commands.

 # The How to run (SOP)
 1) Disable the browser security policy 
    This app calls for a get operation to fetch static json data from the web site https://samplerspubcontent.blob.core.windows.net/public/properties.json, but this website having problem in CORS setup. so from client side whatever we try to add the CORS related headers it wont help. Server side they have to mae the changes but for it is an unknown source.
    however to get the access we need to disable the browser security policy. below is the example for chrome browser.
    
    Steps:
    a) Kill all the chrome browser
    b) Run the cmd as "Administrator"
    c) execute the command start chrome https://samplerspubcontent.blob.core.windows.net/public/properties.json -disable-web-security -user-data-dir="C:\Users\Matheswaran\AppData"
    here the user-data-dir is mostly related to the place where chrome stores the temp/app related data.
    d) great ! you are now ready. The good part is we have disabled only for this particular website. your system is still safe to use for other website as usual. ;)
    
  2) Modify/Update the application base URL
     This application has a post operation to an API which is able to receive the JSON object for the following data.
   {  "Address":"test address updated", "YearBuild":2020, "ListPrice":2000.00, "MonthlyRent":1500, "GrossYield":12   }
  
    a) Make sure you have the api which accepts the above JSON object. here my example would be, 
      that i have another asp.net core API application stored in my other repository.
    b) Download the api code from https://github.com/MatheswaranSagadevan/AspnetCoreTestApp and follow the instruction to run the api.
    c) Most importantly, take the server side api BASE URL and set it here in the angular applications environment.ts file
    
  3)That is it.. !! execute the command ng serve -o
  4) your app up and running just play around it. 
 
