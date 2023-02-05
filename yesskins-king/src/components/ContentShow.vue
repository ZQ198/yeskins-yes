<template>
  <div class="ant-spin-nested-loading">
    <div class="ant-spin-container">
      <div class="all-comList">
        <div class="top">
          <div class="bg-title">
            <img src="data:image/png;base64,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">
            界王神👻
          </div>
          <div class="box-group">
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="top">
          <div class="bg-title">
            <img src="data:image/png;base64,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">
            界王神👻
          </div>
          <div class="box-group">
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
            <div class="lazyload-wrapper">
              <div class="box">
                <div class="pic_contianer">
                  <img src="../assets/boxPicture/F20022.png" class="label">
                  <img class="img">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>
  .ant-spin-nested-loading {
    margin: 0;
    padding: 0;
    font-size: 14px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .ant-spin-nested-loading .ant-spin-container {
    margin: 0;
    padding: 0;
    font-size: 14px;
    box-sizing: border-box;
    position: relative;
    transition: opacity .3s;
  }
  .ant-spin-nested-loading .ant-spin-container .all-comList {
    margin: 0;
    padding: 0;
    font-size: 14px;
    box-sizing: border-box;
    text-align: center;
    margin-top: 2px;
    min-height: 500px;
  }
  .ant-spin-nested-loading .ant-spin-container .all-comList .top {
    margin: 0;
    padding: 0;
    font-size: 14px;
    box-sizing: border-box;
  }
  .ant-spin-nested-loading .ant-spin-container .all-comList .top .bg-title {
    font-weight: 400;
    color: #fff;
    width: 1450px;
    margin: 0 auto 50px;
    text-align: left;
  }
  .ant-spin-nested-loading .ant-spin-container .all-comList .top .bg-title img {
    width: 27px;
    height: 33px;
    margin: 6px 14px 6px 6px;
  }

  .ant-spin-nested-loading .ant-spin-container .all-comList .top .box-group {
    padding: 0;
    font-size: 14px;
    box-sizing: border-box;
    width: 1450px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .ant-spin-nested-loading .ant-spin-container .all-comList .top .box-group .lazyload-wrapper {
    margin: 0;
    padding: 0;
    font-size: 14px;
    box-sizing: border-box;
  }
  .ant-spin-nested-loading .ant-spin-container .all-comList .top .box-group .lazyload-wrapper .box {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    --antd-wave-shadow-color: #1890ff;
    --scroll-bar: 0;
    --swiper-navigation-size: 44px;
    --swiper-theme-color: #007aff;
    font-variant: tabular-nums;
    line-height: 1.5715;
    font-feature-settings: "tnum","tnum";
    user-select: none;
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    position: relative;
    cursor: pointer;
  }
  .ant-spin-nested-loading .ant-spin-container .all-comList .top .box-group .lazyload-wrapper .box .pic_contianer {
    position: relative;
    width: 290px;
    height: 271px;
  }
  .ant-spin-nested-loading .ant-spin-container .all-comList .top .box-group .lazyload-wrapper .box .pic_contianer .label {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .ant-spin-nested-loading .ant-spin-container .all-comList .top .box-group .lazyload-wrapper .box .pic_contianer .img {
    width: 55%;
    height: 60%;
    position: absolute;
    left: 46%;
    top: 48%;
    transform: translate(-50%,-50%);
    transition: transform 1s;
    z-index: 99;
    object-fit: contain;
    opacity: 0;
  }
</style>