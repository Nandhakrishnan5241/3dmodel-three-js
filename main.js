let scene, camera, cube;

function init(){
    scene  = new THREE.Scene();   // scene --> Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight,0.1,1000);  // PerspectiveCamera --> This projection mode is designed to mimic the way the human eye sees. It is the most common projection mode used for rendering a 3D scene.
    // renderer = new THREE.WebGLRenderer(); // webgl is web grapics library powerfull api for 2d and 3d graphics within supported browsers.
    renderer = new THREE.WebGLRenderer({antialias : true}); // for more sharp looking

    renderer.setSize(window.innerWidth, window.innerHeight);  // set the display size

    document.body.appendChild(renderer.domElement);   //render into our HTML document

    /* BoxGeometry is a geometry class for a rectangular cuboid with a given 'width', 'height', and
    'depth'. On creation, the cuboid is centred on the origin, with each edge parallel to one of the */
    const geometry = new THREE.BoxGeometry( 2, 2, 2 ); 
    //const material = new THREE.MeshBasicMaterial( {color: 0x0000ff} ); 
    const texture = new THREE.TextureLoader().load('textures/crate.gif'); // add the gif
    const material = new THREE.MeshBasicMaterial({map : texture});
    cube = new THREE.Mesh( geometry, material );  // meshh create the cube
    scene.add( cube );

    camera.position.z = 5;
}

function animate(){
    requestAnimationFrame(animate); // this is create a loop that makes the renderer draw the scene every time the screamers screen is refreshed
    cube.rotation.x += 0.01  // rotate the cube x axis
    cube.rotation.y += 0.01  // rotate the cube y axis
    renderer.render(scene,camera);
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);

init();
animate();