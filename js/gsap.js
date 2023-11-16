gsap.fromTo('#homeiphone', {
    duration: 1, 
    opacity: 0, 
},
{  
    duration: 3, 
    opacity: 1, 
    y: -10, 
    ease: "slow(0.1,0.1,false)",
    scrollTrigger: {
        trigger: '#homeiphone',    
    }
        
}
);
gsap.fromTo('#homeiphone-img', {
    duration: 1, 
    opacity: 0, 
},
{  
    duration: 3, 
    opacity: 1, 
    y: -10, 
    ease: "slow(0.1,0.1,false)",
    scrollTrigger: {
        trigger: '#homeiphone',    
    }
        
}
);