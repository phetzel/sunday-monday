import React from 'react';

const ArtistShowDetail = ({ artist }) => {
    const description = artist.description.split('***');

    return (
        <div className="artist-show-details-container">
            <div className="artist-show-details">
                <h1>{artist.name}</h1>
                <div className="artist-show-details-content">
                    {
                        description.map((desc, idx) => (
                            <span key={idx}>
                                <p>{desc}</p>
                                <br />
                            </span>
                        ))
                    }
                </div>
            </div>
            <img src={artist.photoUrl}/>
        </div>
    )
}

export default ArtistShowDetail;


{/* <div class="overlap-group-uxzUmT">
      <div class="rectangle-192 border-class-2"></div>
      <div class="rectangle-225"></div>
      <p class="orem-ipsum-aboru-6939 helvetica-regular-normal-blackcurrant-16px border-class-1">
        OREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
        MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO
        <br /><br /><br />CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU
        FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT
        ANIM ID EST LABORUMA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST
        LABORU
      </p>
      <img
        class="hero-image"
        src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd07e1440c2aa0568a7817a/img/hero-image@1x.jpg"
      />
      <h1 class="ridl-69311 helvetica-bold-blackcurrant-48px border-class-1">RIDL</h1>
      <img
        class="ellipse-34"
        src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fd07038a7566d7346c0dfd6/img/ellipse-35@2x.svg"
      />
      <img
        class="mask-group"
        src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fcada2fb9bd4b79e26c628c/img/mask-group@2x.svg"
      />
      <img
        class="image-10"
        src="https://anima-uploads.s3.amazonaws.com/projects/5fc9b90894b52c603156d69f/releases/5fc9bb491f8a87f7078fe376/img/image-10@2x.svg"
      /> */}