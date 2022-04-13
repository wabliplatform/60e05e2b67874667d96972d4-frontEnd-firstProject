let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';let workpackage = new TempApi.Workpackage();$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('ik6jj').onclick = (event) => {
    event.preventDefault();
    workpackage['wpTitle'] = document.querySelector("[annotationname = 'wpTitle']").value;workpackage['wpEnd'] = document.querySelector("[annotationname = 'wpEnd']").value;workpackage['wpDescription'] = document.querySelector("[annotationname = 'wpDescription']").value;apiWorkpackageApi.createworkpackage( workpackage, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};window.onload = () => {};