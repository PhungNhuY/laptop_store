<script setup lang="ts">
</script>

<template>
    <div class="blackLine">
        <div class="container-lg">
            <div class="row">
                <div class="time col-md-3 col-6 order-md-1 order-1 d-flex">Mon-Thu: <span>9:00 AM - 5:30 PM</span></div>
                <div class="address col-md-6 col-12 order-md-2 order-3 d-flex">Visit our showroom in 1234 Street Adress City Address, 1234 <span>Contact Us</span>
                </div>
                <div class="contact col-md-3 col-6 order-md-3 order-2 d-flex">
                    <span>Call Us: (00) 1234 5678</span>
                    <img src="../../assets/icons/fb-icon.svg" alt="">
                    <img src="../../assets/icons/ig-icon.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
p{
    margin: 0px;
}

.blackLine {
    /* height: 44px;*/
    background-color: black;
    padding-bottom: 10px;
    .container-lg{
        padding: 0px;
        padding-top: 12px;
        color: #A2A6B0;
        font-size: 12px;
        font-weight: 500;
        span {
            color: white;
        }
        img {
            margin-left: 5px;
            padding-bottom: 3px;
        }
        .time {
            justify-content: flex-start;
        }
        .address {
            justify-content: center;
        }
        .contact {
            justify-content: end;
        }
    }
}
@media screen and (max-width: 767px) {
    .blackLine .container-lg .time {
        justify-content: center;
    }
    
    .blackLine .container-lg .address {
        justify-content: center;
    }
    
    .blackLine .container-lg .contact {
        justify-content: center;
    }
}
</style>
