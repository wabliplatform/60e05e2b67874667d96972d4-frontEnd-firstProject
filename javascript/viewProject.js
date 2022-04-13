let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.addEventListener('alignnull', function(e) {
  const advanceSelect = document.getElementById('i5xvr');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('i91xn').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/viewProject/','');
      if(projectId === '/viewProject' || projectId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i91xn")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            projectId = value._id;
            parentId = key;
          }
        });
      }
    apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/viewAll' ;}}});};document.addEventListener('alignprojectWorkpackages', function(e) {
  const advanceSelect = document.getElementById('ikkoy');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwpTitle', function(e) {
  const advanceSelect = document.getElementById('ia05z');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwpEnd', function(e) {
  const advanceSelect = document.getElementById('iouyh');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwpTitle', function(e) {
  const advanceSelect = document.getElementById('i3bcwg');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwpEnd', function(e) {
  const advanceSelect = document.getElementById('i0efkk');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwpTitle', function(e) {
  const advanceSelect = document.getElementById('icxoia');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwpEnd', function(e) {
  const advanceSelect = document.getElementById('ipcwkf');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwpTitle', function(e) {
  const advanceSelect = document.getElementById('i506y');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwpEnd', function(e) {
  const advanceSelect = document.getElementById('i14tx');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwpTitle', function(e) {
  const advanceSelect = document.getElementById('isy6d');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignwpEnd', function(e) {
  const advanceSelect = document.getElementById('iyq5d');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});window.onload = () => {let projectId = window.location.pathname.replace('/viewProject/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { 
      if(response.body.query.projectImage !== undefined){
        if(document.querySelector('[annotationname = projectImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = projectImage]').setAttribute('data-image-base64',response.body.query.projectImage.data);
          let fileName = response.body.query.projectImage.name;
          let file = new File([response.body.query.projectImage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = projectImage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = projectImage]').src = response.body.query.projectImage.data ;
        }
        document.querySelector('[annotationname = projectImage]').name = response.body.query.projectImage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectTitle]').textContent = response.body.query.projectTitle; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectStart]').textContent = response.body.query.projectStart; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectEnd]').textContent = response.body.query.projectEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectDescription]').textContent = response.body.query.projectDescription; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = projectWorkpackage]').setAttribute('selected-element',response.body.query.projectWorkpackage.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'projectWorkpackage']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'wpTitle']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.projectWorkpackage.wpTitle;}} catch (e) {console.log(e);}; try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'wpEnd']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.projectWorkpackage.wpEnd;}} catch (e) {console.log(e);};
        }
      if(response.body.query.projectWorkpackage._id){
        map.set(
          document.querySelector(
            "[annotationname = 'projectWorkpackage']"
          ).getAttribute("id"),
          response.body.query.projectWorkpackage
        );
      }
     } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = projectWorkpackages]').setAttribute('selected-element',response.body.query.projectWorkpackages.undefined);document.dispatchEvent(new Event("alignprojectWorkpackages"));
        const insideSubdocument = document.querySelector("[annotationname = 'projectWorkpackages']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.projectWorkpackages;
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'wpTitle']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].wpTitle;
      }
    }
    catch(e) {console.log(e);}; try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'wpEnd']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].wpEnd;
      }
    }
    catch(e) {console.log(e);};
      
      map.set(
        tableDataElement[index].getAttribute("id"),
        tableData[tableData.length - index -1]
      );
    
    });
    
      [...tableDataElement].forEach((element, index) => {
        if (index >= tableData.length) {
          tableDataElement[index].style.display = "none";
        }
        else {
          tableDataElement[index].style.display = "";
        }
      });
    
    
        }
      if(response.body.query.projectWorkpackages._id){
        map.set(
          document.querySelector(
            "[annotationname = 'projectWorkpackages']"
          ).getAttribute("id"),
          response.body.query.projectWorkpackages
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};