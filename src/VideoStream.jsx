// VideoStream.js
import React, { useEffect, useRef, useState } from 'react';
import ROSLIB from 'roslib';

const VideoStream = () => {
    const [isVideoAvailable, setIsVideoAvailable] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const ros = new ROSLIB.Ros({
            url: 'ws://localhost:9090', // Change this to your ROS bridge URL
        });

        const videoTopic = new ROSLIB.Topic({
            ros: ros,
            name: '/camera/image_raw', // Change this to your ROS topic
            messageType: 'sensor_msgs/Image',
        });

        videoTopic.subscribe((message) => {
            if (videoRef.current) {
                // Process the message and update the video element
                // Assuming message.data contains the base64 encoded image
                const base64Image = `data:image/jpeg;base64,${message.data}`;
                videoRef.current.src = base64Image;
                setIsVideoAvailable(true);
            }
        });

        return () => {
            videoTopic.unsubscribe();
        };
    }, []);

    return (
        <div className="video-frame">
            {isVideoAvailable ? (
                <img ref={videoRef} alt="Video stream" />
            ) : (
                <div className="no-video">There is no video currently</div>
            )}
        </div>
    );
};

export default VideoStream;
