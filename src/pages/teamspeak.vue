<template>
    <div class="flex flex-col">
        <!-- Headline -->
        <div class="flex justify-center">
            <div class="flex flex-col my-4">
                <h1 class="text-5xl font-bold">{{ pageName }}</h1>
                <p class="text-primary">{{ subTitle }}</p>
            </div>
        </div>

        <!-- Content -->
        <section class="bg-base-200 flex justify-center p-8 lg:px-28 lg:py-10">
            <div class="flex flex-col justify-center">
                <div class="reloader-wrapper flex items-center justify-between">
                    <div class="form-control">
                        <label class="label cursor-pointer space-x-4">
                            <span class="label-text">Auto refresh</span>
                            <input type="checkbox" class="toggle toggle-primary" checked @change="countdownToggle">
                        </label>
                    </div>
                    <div class="divider divider-horizontal" />
                    <div class="countdown-wrapper">
                        <span class="countdown font-mono text-2xl">
                            <span :style="countdownStyle" />
                        </span>
                        sec
                    </div>
                </div>
                <div class="bg-slate-800 rounded border border-slate-600 my-2 p-2">
                    <a :href="tsViewerUrl"><img :src="tsViewerBanner"></a>
                </div>
                <div class="bg-slate-800 rounded border border-slate-600 my-2 p-2">
                    <div :id="`ts3viewer_${tsServerId}`" style="" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useAppStore } from '~/store/app'

// No typescript here because of the script tag from tsviewer.com
// The function 'ts3v_display' is defined in the script tag from tsviewer.com

// Changing title
const pageName = 'TeamSpeak'
const subTitle = 'borsTiHD TS Viewer'
const appStore = useAppStore()
const pageTitle = `${pageName} - ${appStore.getTitle}`
useHead({ title: pageTitle })

// Countdown Timer
const startSeconds = 60 // Start countdown with 60 seconds
const seconds = ref(startSeconds) // Countdown timer
const countdown = () => {
    seconds.value-- // Decrease seconds by 1
    // Countdown finished
    if (seconds.value === 0) {
        seconds.value = startSeconds // Reset countdown
        reloadTsViewer() // Reload TS Viewer
    }
}
const countdownInterval = ref(null) // Countdown interval
const countdownStyle = computed(() => `--value:${seconds.value};`) // Return countdown as style variable

// Start or stop countdown
const startCountdown = () => { countdownInterval.value = setInterval(countdown, 1000) }
const stopCountdown = () => { clearInterval(countdownInterval.value) }
startCountdown()

// Countdown toggle - start or stop countdown
const countdownToggle = (event) => {
    if (event.target.checked) {
        stopCountdown()
        startCountdown()
    } else {
        stopCountdown()
    }
}

// TS Viewer Config
const tsServerId = 1111967
const tsViewerUrl = `https://www.tsviewer.com/index.php?page=ts_viewer&ID=${tsServerId}`
const tsViewerBanner = `https://www.tsviewer.com/promotion/dynamic_sig/sig.php/clan468x120_all/${tsServerId}.png`
const tsViewerScript = 'https://static.tsviewer.com/short_expire/js/ts3viewer_loader.js'
const tsViewerConfigUrl = `https://www.tsviewer.com/ts3viewer.php?ID=${tsServerId}&text=fff&text_size=12&text_family=1&text_s_color=fff&text_s_weight=normal&text_s_style=normal&text_s_variant=normal&text_s_decoration=none&text_i_color=ffffff&text_i_weight=normal&text_i_style=normal&text_i_variant=normal&text_i_decoration=none&text_c_color=ffffff&text_c_weight=normal&text_c_style=normal&text_c_variant=normal&text_c_decoration=none&text_u_color=ffffff&text_u_weight=normal&text_u_style=normal&text_u_variant=normal&text_u_decoration=none&text_s_color_h=d4d4d4&text_s_weight_h=bold&text_s_style_h=normal&text_s_variant_h=normal&text_s_decoration_h=none&text_i_color_h=d4d4d4&text_i_weight_h=bold&text_i_style_h=normal&text_i_variant_h=normal&text_i_decoration_h=none&text_c_color_h=d4d4d4&text_c_weight_h=normal&text_c_style_h=normal&text_c_variant_h=normal&text_c_decoration_h=none&text_u_color_h=d4d4d4&text_u_weight_h=bold&text_u_style_h=normal&text_u_variant_h=normal&text_u_decoration_h=none&iconset=default_colored_2014`

// Loading TS Viewer
const initTsViewer = () => {
    // Load script tag
    const loadScript = new Promise((resolve) => {
        const script = document.createElement('script')
        script.onload = () => resolve() // Resolve promise after script tag is loaded
        script.setAttribute('src', tsViewerScript)
        document.head.appendChild(script)
    })

    // Initialize TS Viewer after script tag is loaded
    loadScript.then(() => { ts3v_display.init(tsViewerConfigUrl, tsServerId, 100) })
}

// Reload TS Viewer
const reloadTsViewer = () => { ts3v_display.refresh(tsServerId) }

// Loading TS Viewer components and config
onMounted(() => {
    initTsViewer()
})
</script>
