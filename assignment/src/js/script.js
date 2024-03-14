document.addEventListener('DOMContentLoaded', function() {
    const imageUrls = [
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
    
        "https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg",
    
    
        "https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg",
        "https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg"
    ];
    
    const imageGallery = document.getElementById('image-gallery');
    
    imageUrls.forEach(function(imageUrl,index) {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';
        
        const label = document.createElement('label');
        label.className = 'image-checkbox';
        label.setAttribute('for', 'image-checkbox-' + index); // Unique ID for each label
    
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', 'image-checkbox-' + index); // Unique ID for each checkbox
    
        const imageDiv = document.createElement('div');
        imageDiv.className = 'image';
        imageDiv.style.backgroundImage = `url(${imageUrl})`;
    
        label.appendChild(input);
        label.appendChild(imageDiv);
        col.appendChild(label);
        imageGallery.appendChild(col);
    
    });  
    
    });