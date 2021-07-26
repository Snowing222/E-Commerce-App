import React from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&loop=1&list=RDCMUC6xD-jKli-_qIYXDTsNv4dw`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      controls="0"
      modestbranding
      
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;

