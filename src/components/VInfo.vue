<template>
    <div
        @click="show = !show"
        :class="[
            'v-info',
            `v-info--${color}`,
            `v-info--${position}`,
            {
                'v-info--rounded': rounded,
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
            default: 'white',
            validator(x) {
                return ['white', 'black', 'red'].indexOf(x) !== -1;
            },
        },
        position: {
            type: String,
            default: 'top',
            validator(x) {
                return ['left', 'right', 'top', 'bottom'].indexOf(x) !== -1;
            },
        },
        rounded: {
            type: Boolean,
            default: true,
        },
        hover: {
            type: Boolean,
            default: true,
        },
        click: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            show: false,
        };
    },
};
</script>

<style>
.space {
    padding: 100px;
}
.v-info {
    position: relative;
    display: inline-block;
    line-height: 1;
}
.v-info .v-info--text {
    visibility: hidden;
    opacity: 0;
    white-space: nowrap;
    background-color: rgba(55, 65, 81, 1);
    border: 1px solid;
    border-color: #fff;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    font-size: 9px;
    letter-spacing: 0.8px;
}
.v-info--white .v-info--text {
    background-color: rgba(55, 65, 81, 1);
    color: #fff;
}
.v-info--black .v-info--text {
    background-color: white;
    color: rgba(55, 65, 81, 1);
    border-color: rgba(55, 65, 81, 1);
}
.v-info--red .v-info--text {
    background-color: white;
    border-color: rgba(220, 38, 38, 1);
    color: rgba(220, 38, 38, 1);
}
.v-info--right .v-info--text {
    top: -5px;
    left: 115%;
}
.v-info--right .v-info--text:after {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 100%; /* To the left of the tooltip */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent rgba(55, 65, 81, 1) transparent transparent;
}
.v-info--left .v-info--text {
    top: -5px;
    right: 115%;
}
.v-info--left .v-info--text:after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 100%; /* To the right of the tooltip */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent rgba(55, 65, 81, 1);
}

.v-info--top .v-info--text {
    bottom: 115%;
    left: 50%;
    transform: translate(-50%, 0);
}
.v-info--top .v-info--text:after {
    content: ' ';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(55, 65, 81, 1) transparent transparent transparent;
}

.v-info--bottom .v-info--text {
    top: 115%;
    left: 50%;
    transform: translate(-50%, 0);
}
.v-info--bottom .v-info--text:after {
    content: ' ';
    position: absolute;
    bottom: 100%; /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(55, 65, 81, 1) transparent;
}

.v-info:hover .v-info--text {
    visibility: visible;
    opacity: 1;
}

.v-info--top .v-info--text:after {
    transition: all 0.1s ease-in-out;
    transform: translate3d(0, -6px, 0);
}
.v-info--bottom .v-info--text:after {
    transition: all 0.1s ease-in-out;
    transform: translate3d(0, 6px, 0);
}
.v-info--right .v-info--text:after {
    transition: all 0.1s ease-in-out;
    transform: translate3d(6px, 0, 0);
}
.v-info--left .v-info--text:after {
    transition: all 0.1s ease-in-out;
    transform: translate3d(-6px, 0, 0);
}

.v-info:hover .v-info--text:after {
    opacity: 1;
    transform: scale3d(1, 1, 1);
}
.v-info:hover .v-info--text:after {
    transition: all 0.2s 0.3s ease-in-out;
}
</style>
