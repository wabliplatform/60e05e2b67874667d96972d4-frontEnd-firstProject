let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('irh3w').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('ixdgq').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ixdgq")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateProject/' + transitionId;}};document.getElementById('isrv2l').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("isrv2l")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateProject/' + transitionId;}};document.getElementById('im3cml').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("im3cml")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateProject/' + transitionId;}};document.getElementById('i28zkt').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i28zkt")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateProject/' + transitionId;}};document.getElementById('ie6qv2').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("ie6qv2")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateProject/' + transitionId;}};document.getElementById('imo2uy').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("imo2uy")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateProject/' + transitionId;}};document.getElementById('irpb7y').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("irpb7y")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateProject/' + transitionId;}};document.getElementById('i56bt').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i56bt")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updateProject/' + transitionId;}};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ivdzk").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'projectImage']");
if(insideSubDataElement !== null && data[data.length -i -1].projectImage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].projectImage.data;
  insideSubDataElement.name = data[data.length -i -1].projectImage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'projectImage' && data[data.length -i -1].projectImage !== undefined){
  subDataElements[i].src = data[data.length -i -1].projectImage.data;
  subDataElements[i].name = data[data.length -i -1].projectImage.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'projectTitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].projectTitle;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'projectTitle'){
        subDataElements[i].textContent = data[data.length -i -1].projectTitle;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'projectEnd']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].projectEnd;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'projectEnd'){
        subDataElements[i].textContent = data[data.length -i -1].projectEnd;
        
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'projectWorkpackage']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'wpTitle']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].projectWorkpackage.wpTitle;}} catch (e) {console.log(e);}; try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'wpEnd']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = data[data.length - i - 1].projectWorkpackage.wpEnd;}} catch (e) {console.log(e);};
        }
      if(data[data.length-i-1].projectWorkpackage._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'projectWorkpackage']"
          ).getAttribute("id"),
          data[data.length-i-1].projectWorkpackage
        );
      }
     } catch (e) { console.log(e) };try { 
        
        const insideSubdocument = subDataElements[i].querySelector("[annotationname = 'projectWorkpackages']");
        if (insideSubdocument !==null) {
          const tableData = data[data.length - i - 1].projectWorkpackages;
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
      if(data[data.length-i-1].projectWorkpackages._id){
        map.set(
           subDataElements[i].querySelector(
            "[annotationname = 'projectWorkpackages']"
          ).getAttribute("id"),
          data[data.length-i-1].projectWorkpackages
        );
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};