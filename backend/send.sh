#!/bin/bash

export WEB3_RPC_URL=https://rinkeby.infura.io/v3/64fa77a39b9a4c31b186fb2148edff70
export WEB3_PRIVATE_KEY=$1
web3 transfer $3 to $2