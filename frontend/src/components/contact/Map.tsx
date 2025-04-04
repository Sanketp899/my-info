
import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="w-full h-96 bg-business-light rounded-xl overflow-hidden shadow-md mb-12">
      <iframe
        title="Office Location"
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640743534!3d37.75781499229369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1648829256669!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
