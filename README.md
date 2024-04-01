# Design Crowd code test


## how to set up 
 1. install dependency  
```npm install```
 2. run the local build  
```npm run dev```   

## what I have done 
1. mimic the restful api using mock data, use settimeout to mimic the api delay
2. HCard Builder is built flexible, it was derived from mock data. Adding/removing the data updates the HCard Builder too. Each input group, input element, button are built as custom UI component for maximal reusibility.
3. Updating the HCard Builder form immediately upate the local state and the HCard view (righ side).
4. the UI is made responsive, the breakpoints are 768px and 576px;


3. performance tuning, memo
5. micro front end
6. multiple theme
6. react to vue
unit test