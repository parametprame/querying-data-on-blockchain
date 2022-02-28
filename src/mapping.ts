import { BigInt } from "@graphprotocol/graph-ts"
import {
  MarketPlace,
  Cancel,
  Listed,
  Offered,
  Sale
} from "../generated/MarketPlace/MarketPlace"
import { ListingEntity, SaleEntity, HistoryNFt, OfferEntity} from "../generated/schema"

export function handleCancel(event: Cancel): void {}

export function handleListed(event: Listed): void {
  let listing = ListingEntity.load(event.params.listingId.toString())

  if(!listing) {
    listing = new ListingEntity(event.params.listingId.toString())
    listing.price = event.params.price
    listing.listingId = event.params.listingId
    listing.seller = event.params.seller
    listing.token = event.params.token
    listing.ListingStatus = event.params.status
    listing.tokenId = event.params.tokenId
    listing.owner = event.params.seller.toHexString()
  }

  listing.save()

}

export function handleOffered(event: Offered): void {
  let offer = OfferEntity.load(event.params.tokenId.toString())

  if(!offer) {
    offer = new OfferEntity(event.params.tokenId.toString())
    offer.offerer =  event.params.offerer
    offer.price = event.params.price
    offer.tokenId = event.params.tokenId
  }
  
  offer.save()
}

export function handleSale(event: Sale): void {
  let saleItem = SaleEntity.load(event.params.listingId.toString())

  if(!saleItem) {
    saleItem = new SaleEntity(event.params.listingId.toString())
    saleItem.buyer = event.params.buyer
    saleItem.seller = event.params.seller
    saleItem.token = event.params.token  
    saleItem.tokenId = event.params.tokenId
    saleItem.price = event.params.price
    saleItem.ListingStatus = event.params.status
    saleItem.user = event.params.buyer.toHexString()
    saleItem.nft = event.params.tokenId.toHexString()
  }

  saleItem.save()

  let nft = HistoryNFt.load(event.params.tokenId.toString())

  if (!nft) {
    nft = new HistoryNFt(event.params.tokenId.toHexString())
    nft.save()
  }
}
