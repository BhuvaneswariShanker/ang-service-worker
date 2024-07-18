

# Angular 18 Project with Service Worker

This project demonstrates how to add service worker support to an Angular 18 application to enable offline capabilities and provide push notifications when a new app version is published. A simple refresh button will appear at the bottom of the page when updates are available.

## Table of Contents

- [Steps to Add Service Worker to Angular 18 Project](#steps-to-add-service-worker-to-angular-18-project)
  - [Step 1: Add PWA Capabilities](#step-1-add-pwa-capabilities)
  - [Step 2: Update npm Package](#step-2-update-npm-package)
  - [Step 3: Add Service Worker File](#step-3-add-service-worker-file)
  - [Step 4: Install http-server](#step-4-install-http-server)
  - [Step 5: Take Production Build](#step-5-take-production-build)
  - [Step 6: Navigate to Build Files](#step-6-navigate-to-build-files)
  - [Step 7: Start the http-server](#step-7-start-the-http-server)
- [Checking Offline Capabilities and Push Notification](#checking-offline-capabilities-and-push-notification)
  - [Offline Capabilities](#offline-capabilities)
  - [Push Notification on New Version Change](#push-notification-on-new-version-change)
- [Troubleshooting](#troubleshooting)




# Steps to add service worker to angular 18 project

## Step 1: Add pwa capabilities to angular project

Run the angular cli command, to add pwa capabilities to the angular project, this will add service worker configuration file and add neccessary configuration in app.config file,..

```bash
ng add @angular/pwa
```
## Step 2: Update npm package or install angular/pwa

```bash
npm install @angular/pwa
```

## Step 3: Add the serviceworker service file into your project and update the app.components contents as well.

## Step 4: Install http-server globally - skip this step if you have already installed.

As we create a production build, and by default we have made the service worker capabilities not to run in debug mode,
We need to install http server to check the service worker capabilities in production build.

```bash
npm install -g http-server
```

## Step 5: Taking production build

In Angular v17 and V18 the flag --prod is no longer available, so we need to use the below command to take production build.

```bash
ng build --configuration=production
```

## Step 6: Open terminal in dist folder or navigate to build files.

You can either use any of the following ways to navigate to angular build files.

```bash
cd dist/ang-service-worker/browser
```

Or right click the cd dist/ang-service-worker/browser folder and choose 'Open in integrated terminal' option.

## Step 7: Start the http server

You can run the below command to start the http server in browser folder.

```bash
http-server
```





# check offline capabilities and push notification on new version change


# OFFLINE CAPABILITIES

# Step 1: Navigate to [http:localhost:8080](http://127.0.0.1:8080) 

It will be like normal Angular 18 home page.

# Step 2: Stop the http server

Simply press Ctrl + C to stop the server in terminal

# Step 3: Check offline feature

As the server is down, it no longer provides data to client app, but if you refresh the app, you could still see contents because now the contents are cached by service workers.

Also you can navigate to Dev tools-> Application-> Service Worker-> check Offline, and refresh again, this inturn turn off network connection to check offline capabilities.


# PUSH NOTIFICATION ON NEW VERSION CHANGE

# Step 1: Turn off offline capabilities in Devtools

# Step 2: Update content in angular app

Uncomment the below lines in app.component.html ln:331

```html
    <!-- <p>
      Making an update to app contents
    </p> -->
```

# Step 3: Create another production build and start the http server

Redo the same steps from previous section ( Step 5 to Step 7)

# Step 4: Check push notification on new version change

Without refreshing the site [http:localhost:8080](http://127.0.0.1:8080) , check the console, you should see below text and an refresh icon should appear in app at the bottom of start page.


{type: 'VERSION_DETECTED', version: {…}} .....

{type: 'VERSION_READY', currentVersion: {…}, latestVersion: {…}} ..


## Troubleshooting

If you face any issues, stop the http-server, clear the cache and start again










  
