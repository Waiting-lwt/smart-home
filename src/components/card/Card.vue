<template>
  <div :class="'card '+ color">
    <div class="title">{{deviceType}}</div>
    <i class="zmdi zmdi-upload"></i>
    <div class="value">{{deviceData}}</div>
    <div class="stat">Mac地址: {{deviceMac}}</div>
  </div>
</template>

<script>
export default {
  props: {
    deviceType: String,
    deviceData: [String, Number],
    deviceMac: String,
    deviceName: String,
    color: String
  }
}
</script>

<style lang="scss" scoped>
.card {
	border-radius: 8px;
	color: white;
	padding: 10px;
	position: relative;

	.zmdi {
		color: white;
		font-size: 28px;
		opacity: 0.3;
		position: absolute;
		right: 13px;
		top: 13px;
	}

	.stat {
		border-top: 1px solid rgba(255, 255, 255, 0.3);
		font-size: 8px;
    // margin-top: 25px;
    margin-top: 10px;
		padding: 10px 10px 0;
		text-transform: uppercase;
	}

	.title {
		display: inline-block;
		font-size: 8px;
		padding: 10px 10px 0;
    text-transform: uppercase;
	}

	.value {
    margin-top: 10px;
		font-size: 28px;
		padding: 0 10px;
	}

	&.blue {
		background-color: #2298f1;
	}

	&.green {
		background-color: #66b92e;
	}

	&.orange {
		background-color: #da932c;
	}

	&.red {
		background-color: #d65b4a;
	}
}
</style>