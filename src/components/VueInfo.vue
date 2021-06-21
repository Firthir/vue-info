<template>
    <div
        :class="[
            'v-info',
            `v-info--${color}`,
            `v-info--${position}`,
            {
                'v-info--square': square,
            },
        ]"
    >
        <slot></slot>
        <div class="v-info--text">
            {{ info }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            type: String,
            default: 'Tooltip',
            require: true,
        },
        color: {
            type: String,
            default: 'black',
            validator(x) {
                return ['black', 'white', 'red'].indexOf(x) !== -1;
            },
        },
        position: {
            type: String,
            default: 'top',
            validator(x) {
                return ['left', 'right', 'top', 'bottom'].indexOf(x) !== -1;
            },
        },
        square: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style>
.v-info {
    position: relative;
    display: inline-block;
    line-height: 1;
}
.v-info .v-info--text {
    white-space: nowrap;
    border: 1px solid;
    text-align: center;
    padding: 5px;
    position: absolute;
    font-size: 9px;
    letter-spacing: 0.8px;
    border-radius: 6px;
}
/* Square */
.v-info--square .v-info--text {
    border-radius: 0;
}
/* Colors */
.v-info--black .v-info--text {
    background-color: rgba(55, 65, 81, 1);
    color: #fff;
    border-color: rgba(55, 65, 81, 1);
}
.v-info--black.v-info--right .v-info--text:after {
    border-color: transparent rgba(55, 65, 81, 1) transparent transparent;
}
.v-info--black.v-info--left .v-info--text:after {
    border-color: transparent transparent transparent rgba(55, 65, 81, 1);
}
.v-info--black.v-info--top .v-info--text:after {
    border-color: rgba(55, 65, 81, 1) transparent transparent transparent;
}
.v-info--black.v-info--bottom .v-info--text:after {
    border-color: transparent transparent rgba(55, 65, 81, 1) transparent;
}
.v-info--white .v-info--text {
    background-color: white;
    color: rgba(55, 65, 81, 1);
    border-color: white;
}
.v-info--white.v-info--right .v-info--text:after {
    border-color: transparent white transparent transparent;
}
.v-info--white.v-info--left .v-info--text:after {
    border-color: transparent transparent transparent white;
}
.v-info--white.v-info--top .v-info--text:after {
    border-color: white transparent transparent transparent;
}
.v-info--white.v-info--bottom .v-info--text:after {
    border-color: transparent transparent white transparent;
}
.v-info--red .v-info--text {
    background-color: rgba(220, 38, 38, 1);
    border-color: rgba(220, 38, 38, 1);
    color: white;
}
.v-info--red.v-info--right .v-info--text:after {
    border-color: transparent rgba(220, 38, 38, 1) transparent transparent;
}
.v-info--red.v-info--left .v-info--text:after {
    border-color: transparent transparent transparent rgba(220, 38, 38, 1);
}
.v-info--red.v-info--top .v-info--text:after {
    border-color: rgba(220, 38, 38, 1) transparent transparent transparent;
}
.v-info--red.v-info--bottom .v-info--text:after {
    border-color: transparent transparent rgba(220, 38, 38, 1) transparent;
}
/* Positions */
.v-info--right .v-info--text {
    top: 5px;
    left: 100%;
}
.v-info--right .v-info--text:after {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
}
.v-info--left .v-info--text {
    top: 5px;
    right: 100%;
}
.v-info--left .v-info--text:after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
}
.v-info--top .v-info--text {
    bottom: 105%;
    left: 50%;
    transform: translate(-50%, 0);
}
.v-info--top .v-info--text:after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
}
.v-info--bottom .v-info--text {
    top: 105%;
    left: 50%;
    transform: translate(-50%, 0);
}
.v-info--bottom .v-info--text:after {
    content: ' ';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
}
/* Amination */
.v-info--top .v-info--text:after {
    transition: all 0.1s ease-in-out;
    transform: translate3d(0, -6px, -1);
}
.v-info--bottom .v-info--text:after {
    transition: all 0.1s ease-in-out;
    transform: translate3d(0, 6px, -1);
}
.v-info--right .v-info--text:after {
    transition: all 0.1s ease-in-out;
    transform: translate3d(6px, 0, -1);
}
.v-info--left .v-info--text:after {
    transition: all 0.1s ease-in-out;
    transform: translate3d(-6px, 0, -1);
}
/* Hover */
.v-info:hover .v-info--text {
    visibility: visible;
    opacity: 1;
}
.v-info:hover .v-info--text:after {
    opacity: 1;
    transform: scale3d(1, 1, 1);
}
.v-info:hover .v-info--text:after {
    transition: all 0.2s 0.3s ease-in-out;
}
</style>
