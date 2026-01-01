/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: paymentmethods
 * Interface for PaymentMethods
 */
export interface PaymentMethods {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  methodName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType boolean */
  isActive?: boolean;
  /** @wixFieldType number */
  processingFee?: number;
  /** @wixFieldType image */
  logo?: string;
  /** @wixFieldType text */
  instructions?: string;
}


/**
 * Collection ID: products
 * Interface for Products
 */
export interface Products {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  productName?: string;
  /** @wixFieldType image */
  productImage?: string;
  /** @wixFieldType number */
  pricePKR?: number;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  sku?: string;
  /** @wixFieldType text */
  sizesAvailable?: string;
  /** @wixFieldType text */
  colorsAvailable?: string;
  /** @wixFieldType boolean */
  featured?: boolean;
}
