// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Cancel extends ethereum.Event {
  get params(): Cancel__Params {
    return new Cancel__Params(this);
  }
}

export class Cancel__Params {
  _event: Cancel;

  constructor(event: Cancel) {
    this._event = event;
  }

  get listingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Listed extends ethereum.Event {
  get params(): Listed__Params {
    return new Listed__Params(this);
  }
}

export class Listed__Params {
  _event: Listed;

  constructor(event: Listed) {
    this._event = event;
  }

  get listingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get status(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class Offered extends ethereum.Event {
  get params(): Offered__Params {
    return new Offered__Params(this);
  }
}

export class Offered__Params {
  _event: Offered;

  constructor(event: Offered) {
    this._event = event;
  }

  get offerer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Sale extends ethereum.Event {
  get params(): Sale__Params {
    return new Sale__Params(this);
  }
}

export class Sale__Params {
  _event: Sale;

  constructor(event: Sale) {
    this._event = event;
  }

  get listingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get status(): i32 {
    return this._event.parameters[6].value.toI32();
  }
}

export class MarketPlace___listingsResult {
  value0: i32;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: i32,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class MarketPlace___offersResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class MarketPlace__getListingResultValue0Struct extends ethereum.Tuple {
  get status(): i32 {
    return this[0].toI32();
  }

  get seller(): Address {
    return this[1].toAddress();
  }

  get token(): Address {
    return this[2].toAddress();
  }

  get tokenId(): BigInt {
    return this[3].toBigInt();
  }

  get price(): BigInt {
    return this[4].toBigInt();
  }
}

export class MarketPlace__getListingsResultValue0Struct extends ethereum.Tuple {
  get status(): i32 {
    return this[0].toI32();
  }

  get seller(): Address {
    return this[1].toAddress();
  }

  get token(): Address {
    return this[2].toAddress();
  }

  get tokenId(): BigInt {
    return this[3].toBigInt();
  }

  get price(): BigInt {
    return this[4].toBigInt();
  }
}

export class MarketPlace__showOfferforListitemResultValue0Struct extends ethereum.Tuple {
  get offerer(): Address {
    return this[0].toAddress();
  }

  get price(): BigInt {
    return this[1].toBigInt();
  }
}

export class MarketPlace extends ethereum.SmartContract {
  static bind(address: Address): MarketPlace {
    return new MarketPlace("MarketPlace", address);
  }

  _listingId(): BigInt {
    let result = super.call("_listingId", "_listingId():(uint256)", []);

    return result[0].toBigInt();
  }

  try__listingId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_listingId", "_listingId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _listings(param0: BigInt): MarketPlace___listingsResult {
    let result = super.call(
      "_listings",
      "_listings(uint256):(uint8,address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new MarketPlace___listingsResult(
      result[0].toI32(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try__listings(
    param0: BigInt
  ): ethereum.CallResult<MarketPlace___listingsResult> {
    let result = super.tryCall(
      "_listings",
      "_listings(uint256):(uint8,address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MarketPlace___listingsResult(
        value[0].toI32(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  _offers(param0: BigInt, param1: BigInt): MarketPlace___offersResult {
    let result = super.call(
      "_offers",
      "_offers(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new MarketPlace___offersResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try__offers(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<MarketPlace___offersResult> {
    let result = super.tryCall(
      "_offers",
      "_offers(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MarketPlace___offersResult(value[0].toAddress(), value[1].toBigInt())
    );
  }

  countListing(): BigInt {
    let result = super.call("countListing", "countListing():(uint256)", []);

    return result[0].toBigInt();
  }

  try_countListing(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("countListing", "countListing():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  countingOffer(param0: BigInt): BigInt {
    let result = super.call(
      "countingOffer",
      "countingOffer(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_countingOffer(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "countingOffer",
      "countingOffer(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getListing(listingId: BigInt): MarketPlace__getListingResultValue0Struct {
    let result = super.call(
      "getListing",
      "getListing(uint256):((uint8,address,address,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(listingId)]
    );

    return changetype<MarketPlace__getListingResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getListing(
    listingId: BigInt
  ): ethereum.CallResult<MarketPlace__getListingResultValue0Struct> {
    let result = super.tryCall(
      "getListing",
      "getListing(uint256):((uint8,address,address,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(listingId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<MarketPlace__getListingResultValue0Struct>(value[0].toTuple())
    );
  }

  getListings(): Array<MarketPlace__getListingsResultValue0Struct> {
    let result = super.call(
      "getListings",
      "getListings():((uint8,address,address,uint256,uint256)[])",
      []
    );

    return result[0].toTupleArray<MarketPlace__getListingsResultValue0Struct>();
  }

  try_getListings(): ethereum.CallResult<
    Array<MarketPlace__getListingsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getListings",
      "getListings():((uint8,address,address,uint256,uint256)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<MarketPlace__getListingsResultValue0Struct>()
    );
  }

  offeringId(): BigInt {
    let result = super.call("offeringId", "offeringId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_offeringId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("offeringId", "offeringId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  showOfferforListitem(
    listingId: BigInt
  ): Array<MarketPlace__showOfferforListitemResultValue0Struct> {
    let result = super.call(
      "showOfferforListitem",
      "showOfferforListitem(uint256):((address,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(listingId)]
    );

    return result[0].toTupleArray<
      MarketPlace__showOfferforListitemResultValue0Struct
    >();
  }

  try_showOfferforListitem(
    listingId: BigInt
  ): ethereum.CallResult<
    Array<MarketPlace__showOfferforListitemResultValue0Struct>
  > {
    let result = super.tryCall(
      "showOfferforListitem",
      "showOfferforListitem(uint256):((address,uint256)[])",
      [ethereum.Value.fromUnsignedBigInt(listingId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        MarketPlace__showOfferforListitemResultValue0Struct
      >()
    );
  }
}

export class AcceptOfferCall extends ethereum.Call {
  get inputs(): AcceptOfferCall__Inputs {
    return new AcceptOfferCall__Inputs(this);
  }

  get outputs(): AcceptOfferCall__Outputs {
    return new AcceptOfferCall__Outputs(this);
  }
}

export class AcceptOfferCall__Inputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }

  get listingId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get idoffer(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AcceptOfferCall__Outputs {
  _call: AcceptOfferCall;

  constructor(call: AcceptOfferCall) {
    this._call = call;
  }
}

export class BuyTokenCall extends ethereum.Call {
  get inputs(): BuyTokenCall__Inputs {
    return new BuyTokenCall__Inputs(this);
  }

  get outputs(): BuyTokenCall__Outputs {
    return new BuyTokenCall__Outputs(this);
  }
}

export class BuyTokenCall__Inputs {
  _call: BuyTokenCall;

  constructor(call: BuyTokenCall) {
    this._call = call;
  }

  get listingId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyTokenCall__Outputs {
  _call: BuyTokenCall;

  constructor(call: BuyTokenCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get listingId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class ListTokenCall extends ethereum.Call {
  get inputs(): ListTokenCall__Inputs {
    return new ListTokenCall__Inputs(this);
  }

  get outputs(): ListTokenCall__Outputs {
    return new ListTokenCall__Outputs(this);
  }
}

export class ListTokenCall__Inputs {
  _call: ListTokenCall;

  constructor(call: ListTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ListTokenCall__Outputs {
  _call: ListTokenCall;

  constructor(call: ListTokenCall) {
    this._call = call;
  }
}

export class OfferCall extends ethereum.Call {
  get inputs(): OfferCall__Inputs {
    return new OfferCall__Inputs(this);
  }

  get outputs(): OfferCall__Outputs {
    return new OfferCall__Outputs(this);
  }
}

export class OfferCall__Inputs {
  _call: OfferCall;

  constructor(call: OfferCall) {
    this._call = call;
  }

  get _price(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get listingId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class OfferCall__Outputs {
  _call: OfferCall;

  constructor(call: OfferCall) {
    this._call = call;
  }
}
