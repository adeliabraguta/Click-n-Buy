<script setup>

import {Icon} from "@iconify/vue";
</script>

<template>
<div>
    <div class="chart">
        <div class="chart-div">
            <icon class="icon" icon="material-symbols:add-shopping-cart"/>
            <h2 class="your-chart">Your Chart</h2>
        </div>
    </div>
</div>
</template>

<style scoped>
.chart{
    background-color: white;
    width: 40vw;
    height: 100vh;
    padding-top: 64px;

    .chart-div{
        .icon{

        }
        .your-chart{
            margin: 0;
        }
    }
}
</style>