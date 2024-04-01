# Design Crowd code test

This is the host app of the micro-frontends.  
To set up everything, do the following

## first: set up the remote app
download and follow the instruction to set up this repo first, it is the remote app
https://github.com/kidder514/Design-Crowd-Code-test---micro

## Second: set up the host app
back on this repo, do the following 
 1. install dependency  
```npm install```
 2. run the local build  
```npm run dev```   

## what I have done 
1. mimic the restful api using mock data, use settimeout to mimic the api delay
2. HCard Builder is built flexible, it was derived from mock data. Adding/removing the data updates the HCard Builder too. Each input group, input element, button are built as custom UI component for maximal reusibility.
3. Updating the HCard Builder form immediately upate the local state and the HCard view (righ side).
4. the UI is made responsive, the breakpoints are 768px and 576px;
5. all component unit-tested
6. made HCard an remote micro frontend app for the flexibility