import { IconProps } from '@/types/type';
import React from 'react';

type IconDefinition = {
    path: string;
    viewBox: string;
    stroke?: boolean;
    multiPath?: boolean;
};

export const ICONS: Record<string, IconDefinition> = {
    dashboard: {
        path: "M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm0 2h5v10H2V3zm7 0h5v4H9V3zm0 6h5v4H9V9z",
        viewBox: "0 0 16 16"
    },
    analytics: {
        path: "M0 13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v2zm14-3V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6h4zm-6 0V1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9h4zM1 11V8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3H1z",
        viewBox: "0 0 16 16"
    },
    notifications: {
        path: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z",
        viewBox: "0 0 16 16"
    },
    reports: {
        path: "M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z",
        viewBox: "0 0 16 16"
    },
    reportsExtra: {
        path: "M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z",
        viewBox: "0 0 16 16"
    },
    settings: {
        path: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z",
        viewBox: "0 0 16 16"
    },
    settingsExtra: {
        path: "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z",
        viewBox: "0 0 16 16"
    },
    logo: {
        path: "M14 6l-4.22 5.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16H5z",
        viewBox: "0 0 24 24"
    },
    close: {
        path: "M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z",
        viewBox: "0 0 24 24"
    },
    expandCollapse: {
        path: "M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z",
        viewBox: "0 0 16 16"
    },
    hamburger: {
        path: "M4 5h16M4 11h16M4 17h16",
        viewBox: "0 0 24 24",
        stroke: true
    },
    sun: {
        path: "M8 0a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M13.657 3.757a1 1 0 0 0-1.414-1.414l-.354.354a1 1 0 0 0 1.414 1.414l.354-.354Z M13.5 8a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2h-.5a1 1 0 0 1-1-1Z M13.303 11.889a1 1 0 0 0-1.414 1.414l.354.354a1 1 0 0 0 1.414-1.414l-.354-.354Z M8 13.5a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1Z M4.111 13.303a1 1 0 1 0-1.414-1.414l-.354.354a1 1 0 1 0 1.414 1.414l.354-.354Z M0 8a1 1 0 0 1 1-1h.5a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Z M3.757 2.343a1 1 0 1 0-1.414 1.414l.354.354A1 1 0 1 0 4.11 2.697l-.354-.354Z",
        viewBox: "0 0 16 16",
        multiPath: true
    },
    moon: {
        path: "M11.875 4.375a.625.625 0 1 0 1.25 0c.001-.69.56-1.249 1.25-1.25a.625.625 0 1 0 0-1.25 1.252 1.252 0 0 1-1.25-1.25.625.625 0 1 0-1.25 0 1.252 1.252 0 0 1-1.25 1.25.625.625 0 1 0 0 1.25c.69.001 1.249.56 1.25 1.25Z M7.019 1.985a1.55 1.55 0 0 0-.483-1.36 1.44 1.44 0 0 0-1.53-.277C2.056 1.553 0 4.5 0 7.9 0 12.352 3.648 16 8.1 16c3.407 0 6.246-2.058 7.51-4.963a1.446 1.446 0 0 0-.25-1.55 1.554 1.554 0 0 0-1.372-.502c-4.01.552-7.539-2.987-6.97-7Z M2 7.9C2 5.64 3.193 3.664 4.961 2.6 4.82 7.245 8.72 11.158 13.36 11.04 12.265 12.822 10.341 14 8.1 14 4.752 14 2 11.248 2 7.9Z",
        viewBox: "0 0 16 16",
        multiPath: true
    },
    userAvatar: {
        path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
        viewBox: "0 0 24 24"
    },
    chevronDown: {
        path: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z",
        viewBox: "0 0 12 12"
    },


};



const Icon: React.FC<IconProps> = ({
    name,
    className = "",
    width = 16,
    height = 16,
    color,
}) => {
    const icon = ICONS[name];

    if (!icon) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    if (icon.stroke) {
        return (
            <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox={icon.viewBox}
                fill="none"
                stroke={color ? color : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d={icon.path} />
            </svg>
        );
    }

    if (icon.multiPath) {
        const paths = icon.path.split(' M').map((p, i) =>
            i === 0 ? p : `M${p}`
        );

        return (
            <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox={icon.viewBox}
                fill={color ? color : "currentColor"}
            >
                {paths.map((path, index) => (
                    <path key={index} d={path} />
                ))}
            </svg>
        );
    }

    if (name === 'reports') {
        return (
            <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox={icon.viewBox}
                fill={color ? color : "currentColor"}
            >
                <path d={icon.path} />
                <path d={ICONS.reportsExtra.path} />
            </svg>
        );
    }

    if (name === 'settings') {
        return (
            <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox={icon.viewBox}
                fill={color ? color : "currentColor"}
            >
                <path d={icon.path} />
                <path d={ICONS.settingsExtra.path} />
            </svg>
        );
    }

    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={icon.viewBox}
            fill={color ? color : "currentColor"}
        >
            <path d={icon.path} />
        </svg>
    );
};

export default Icon;
