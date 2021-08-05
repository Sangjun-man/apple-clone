function setLayout() {
    
    for (let i = 0; i < sceneInfo.length; i++)
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
}