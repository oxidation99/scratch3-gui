import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicImage from './music.png';
import penImage from './pen.png';
import videoImage from './video-sensing.png';
import translateImage from './translate.png';
import microbitImage from './microbit.png';
import ev3Image from './ev3.png';
import wedoImage from './wedo.png';

import martyImage from './marty.png';
import martyExtImage from './marty_extended.png';
import martyPeripheralImage from './peripheral-connection/marty/marty-illustration.svg';
import martyMenuImage from './peripheral-connection/marty/marty-small.svg';

import microbitPeripheralImage from './peripheral-connection/microbit/microbit-illustration.svg';
import microbitMenuImage from './peripheral-connection/microbit/microbit-small.svg';
import ev3PeripheralImage from './peripheral-connection/ev3/ev3-hub-illustration.svg';
import ev3MenuImage from './peripheral-connection/ev3/ev3-small.svg';
import wedoPeripheralImage from './peripheral-connection/wedo/wedo-illustration.svg';
import wedoMenuImage from './peripheral-connection/wedo/wedo-small.svg';
import wedoButtonImage from './peripheral-connection/wedo/wedo-button-illustration.svg';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Marty the Robot"
                description="Name for the 'Marty the Robot' extension"
                id="gui.extension.marty.name"
            />
        ),
        extensionId: 'marty',
        iconURL: martyImage,
        description: (
            <FormattedMessage
                defaultMessage="Play and program with Marty."
                description="Description for the 'Marty the Robot' extension"
                id="gui.extension.marty.description"
            />
        ),
        featured: true,
        disabled: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        peripheralImage: martyPeripheralImage,
        smallPeripheralImage: martyMenuImage,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting... Make sure your Marty is on and connected to the same network as your computer."
                description="Message to help people connect to their Marty."
                id="gui.extension.marty.connectingMessage"
            />
        ),
        helpLink: 'https://robotical.io/support'
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Marty the Robot (Extended)"
                description="Name for the 'Marty the Robot (Extended)' extension"
                id="gui.extension.martyExt.name"
            />
        ),
        extensionId: 'martyExt',
        iconURL: martyExtImage,
        description: (
            <FormattedMessage
                defaultMessage="Play and program with Marty."
                description="Description for the 'Marty the Robot (Extended)' extension"
                id="gui.extension.martyExt.description"
            />
        ),
        featured: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicImage,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penImage,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoImage,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        iconURL: translateImage,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        iconURL: microbitImage,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        peripheralImage: microbitPeripheralImage,
        smallPeripheralImage: microbitMenuImage,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        iconURL: ev3Image,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        peripheralImage: ev3PeripheralImage,
        smallPeripheralImage: ev3MenuImage,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO WeDo 2.0',
        extensionId: 'wedo2',
        iconURL: wedoImage,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        peripheralImage: wedoPeripheralImage,
        smallPeripheralImage: wedoMenuImage,
        peripheralButtonImage: wedoButtonImage,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'

    }
];
