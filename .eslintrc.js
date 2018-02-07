module.exports = {
    "extends": "airbnb-base",
    "env": {
        "browser": true
    },
    "globals": {
        "Dialog": true,
        "Timing": true,
        "CommandPopup": true,
        "showNotification": true,
        "translations": true
    },
    "rules": {
        "no-use-before-define": ["error", { "functions": false, "classes": true }],
        "camelcase": "off",
        "no-console": "off",
        "no-alert": "off",
        "no-prompt": "off",
    }
}
