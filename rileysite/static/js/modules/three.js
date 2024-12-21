import * as THREE from 'three';

const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0xcccccc, 10, 15 );
scene.background = null;
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("myScene").appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry( 5, 5 );
const texture = new THREE.TextureLoader().load( "static/site/spotlightcookie_temp_hl2.jpg" );
const material = new THREE.MeshBasicMaterial( { map: texture } );
const plane = new THREE.Mesh( geometry, material );

const geometry2 = new THREE.PlaneGeometry( 10, 10 );
const texture2 = new THREE.TextureLoader().load( "testimage.jpg" );
const material2 = new THREE.MeshBasicMaterial( { map: texture2 } );
const plane2 = new THREE.Mesh( geometry2, material2 );
scene.add( plane, plane2 );
plane.translateZ(1);

camera.position.z = 5;

function animate() {
    renderer.render ( scene, camera );
}
renderer.setAnimationLoop( animate );

