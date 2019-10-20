function downloadDocx(){
    const doc = new Document();
       
        var sourceHTML = document.getElementById("textareaDifferences").innerHTML;
                
        const paragraph = new Paragraph(sourceHTML);

        doc.addParagraph(paragraph);

        const packer = new Packer();

            packer.toBlob(doc).then(blob => {
                console.log(blob);
                saveAs(blob, 'docufix' + new Date() + '.docx');
                console.log("Document created successfully");
            });
    }



