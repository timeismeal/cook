export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      collection_products: {
        Row: {
          collection_id: number
          created_at: string
          id: number
          notes: string | null
          product_attributes:
            | Database["public"]["Enums"]["product_attributes"][]
            | null
          product_id: number
          quantity: number
          quantity_type_id: number
        }
        Insert: {
          collection_id: number
          created_at?: string
          id?: number
          notes?: string | null
          product_attributes?:
            | Database["public"]["Enums"]["product_attributes"][]
            | null
          product_id: number
          quantity?: number
          quantity_type_id: number
        }
        Update: {
          collection_id?: number
          created_at?: string
          id?: number
          notes?: string | null
          product_attributes?:
            | Database["public"]["Enums"]["product_attributes"][]
            | null
          product_id?: number
          quantity?: number
          quantity_type_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "collection_products_collection_id_fkey"
            columns: ["collection_id"]
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collection_products_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collection_products_quantity_type_id_fkey"
            columns: ["quantity_type_id"]
            referencedRelation: "quantity_types"
            referencedColumns: ["id"]
          }
        ]
      }
      collections: {
        Row: {
          cook_time_in_minutes: number
          created_at: string
          desc: string | null
          id: number
          is_one_off: boolean
          label: string
          person_id: number
          prep_time_in_minutes: number
          servings: number | null
        }
        Insert: {
          cook_time_in_minutes?: number
          created_at?: string
          desc?: string | null
          id?: number
          is_one_off?: boolean
          label: string
          person_id: number
          prep_time_in_minutes?: number
          servings?: number | null
        }
        Update: {
          cook_time_in_minutes?: number
          created_at?: string
          desc?: string | null
          id?: number
          is_one_off?: boolean
          label?: string
          person_id?: number
          prep_time_in_minutes?: number
          servings?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "collections_person_id_fkey"
            columns: ["person_id"]
            referencedRelation: "persons"
            referencedColumns: ["id"]
          }
        ]
      }
      dietary_options: {
        Row: {
          desc: string | null
          id: number
          label: string
        }
        Insert: {
          desc?: string | null
          id?: number
          label: string
        }
        Update: {
          desc?: string | null
          id?: number
          label?: string
        }
        Relationships: []
      }
      features: {
        Row: {
          created_at: string
          desc: string | null
          id: number
          label: string
        }
        Insert: {
          created_at?: string
          desc?: string | null
          id?: number
          label: string
        }
        Update: {
          created_at?: string
          desc?: string | null
          id?: number
          label?: string
        }
        Relationships: []
      }
      food_sensitivities: {
        Row: {
          desc: string | null
          id: number
          label: string
        }
        Insert: {
          desc?: string | null
          id?: number
          label: string
        }
        Update: {
          desc?: string | null
          id?: number
          label?: string
        }
        Relationships: []
      }
      invoices: {
        Row: {
          created_at: string
          due_date: string
          id: number
          status_id: number
          subscription_id: number
          total_amount_hths: number
        }
        Insert: {
          created_at?: string
          due_date: string
          id?: number
          status_id: number
          subscription_id: number
          total_amount_hths?: number
        }
        Update: {
          created_at?: string
          due_date?: string
          id?: number
          status_id?: number
          subscription_id?: number
          total_amount_hths?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoices_status_id_fkey"
            columns: ["status_id"]
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_subscription_id_fkey"
            columns: ["subscription_id"]
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          }
        ]
      }
      members: {
        Row: {
          created_at: string
          id: number
          owner_person_id: number
          person_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          owner_person_id: number
          person_id: number
        }
        Update: {
          created_at?: string
          id?: number
          owner_person_id?: number
          person_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "members_owner_person_id_fkey"
            columns: ["owner_person_id"]
            referencedRelation: "persons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "members_person_id_fkey"
            columns: ["person_id"]
            referencedRelation: "persons"
            referencedColumns: ["id"]
          }
        ]
      }
      payments: {
        Row: {
          amount_hths: number
          created_at: string
          id: number
          invoice_id: number
          status_id: number
        }
        Insert: {
          amount_hths?: number
          created_at?: string
          id?: number
          invoice_id: number
          status_id: number
        }
        Update: {
          amount_hths?: number
          created_at?: string
          id?: number
          invoice_id?: number
          status_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_status_id_fkey"
            columns: ["status_id"]
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          }
        ]
      }
      persons: {
        Row: {
          chosen_name: string | null
          created_at: string
          email: string
          id: number
          stripe_customer_id: string | null
        }
        Insert: {
          chosen_name?: string | null
          created_at?: string
          email: string
          id?: number
          stripe_customer_id?: string | null
        }
        Update: {
          chosen_name?: string | null
          created_at?: string
          email?: string
          id?: number
          stripe_customer_id?: string | null
        }
        Relationships: []
      }
      plans: {
        Row: {
          amount_hths: number
          created_at: string
          desc: string | null
          feature_ids: number[]
          id: number
          label: string
          stripe_price_id: string | null
        }
        Insert: {
          amount_hths?: number
          created_at?: string
          desc?: string | null
          feature_ids: number[]
          id?: number
          label: string
          stripe_price_id?: string | null
        }
        Update: {
          amount_hths?: number
          created_at?: string
          desc?: string | null
          feature_ids?: number[]
          id?: number
          label?: string
          stripe_price_id?: string | null
        }
        Relationships: []
      }
      product_groups: {
        Row: {
          examples: string[] | null
          id: number
          is_perishable: boolean
          label: string
        }
        Insert: {
          examples?: string[] | null
          id?: number
          is_perishable?: boolean
          label: string
        }
        Update: {
          examples?: string[] | null
          id?: number
          is_perishable?: boolean
          label?: string
        }
        Relationships: []
      }
      product_types: {
        Row: {
          id: number
          label: string
        }
        Insert: {
          id?: number
          label: string
        }
        Update: {
          id?: number
          label?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string
          desc: string | null
          id: number
          is_approved: boolean
          is_perishable: boolean
          label: string | null
          person_id: number | null
          product_group_id: number
          product_type_ids: number[] | null
        }
        Insert: {
          created_at?: string
          desc?: string | null
          id?: number
          is_approved?: boolean
          is_perishable?: boolean
          label?: string | null
          person_id?: number | null
          product_group_id: number
          product_type_ids?: number[] | null
        }
        Update: {
          created_at?: string
          desc?: string | null
          id?: number
          is_approved?: boolean
          is_perishable?: boolean
          label?: string | null
          person_id?: number | null
          product_group_id?: number
          product_type_ids?: number[] | null
        }
        Relationships: [
          {
            foreignKeyName: "products_person_id_fkey"
            columns: ["person_id"]
            referencedRelation: "persons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_product_group_id_fkey"
            columns: ["product_group_id"]
            referencedRelation: "product_groups"
            referencedColumns: ["id"]
          }
        ]
      }
      quantity_groups: {
        Row: {
          id: number
          label: string
        }
        Insert: {
          id?: number
          label: string
        }
        Update: {
          id?: number
          label?: string
        }
        Relationships: []
      }
      quantity_types: {
        Row: {
          abbv: string
          desc: string | null
          id: number
          label: string
          quantity_group_id: number
        }
        Insert: {
          abbv: string
          desc?: string | null
          id?: number
          label: string
          quantity_group_id: number
        }
        Update: {
          abbv?: string
          desc?: string | null
          id?: number
          label?: string
          quantity_group_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "quantity_types_quantity_group_id_fkey"
            columns: ["quantity_group_id"]
            referencedRelation: "quantity_groups"
            referencedColumns: ["id"]
          }
        ]
      }
      shopping_list_collections: {
        Row: {
          collection_id: number
          id: number
          servings: number
          shopping_list_id: number
        }
        Insert: {
          collection_id: number
          id?: number
          servings?: number
          shopping_list_id: number
        }
        Update: {
          collection_id?: number
          id?: number
          servings?: number
          shopping_list_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "shopping_list_collections_collection_id_fkey"
            columns: ["collection_id"]
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shopping_list_collections_shopping_list_id_fkey"
            columns: ["shopping_list_id"]
            referencedRelation: "shopping_lists"
            referencedColumns: ["id"]
          }
        ]
      }
      shopping_lists: {
        Row: {
          created_at: string
          desc: string | null
          id: number
          label: string
          person_id: number
        }
        Insert: {
          created_at?: string
          desc?: string | null
          id?: number
          label: string
          person_id: number
        }
        Update: {
          created_at?: string
          desc?: string | null
          id?: number
          label?: string
          person_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "shopping_lists_person_id_fkey"
            columns: ["person_id"]
            referencedRelation: "persons"
            referencedColumns: ["id"]
          }
        ]
      }
      statuses: {
        Row: {
          associated_table_names: string[]
          desc: string | null
          id: number
          label: string
        }
        Insert: {
          associated_table_names: string[]
          desc?: string | null
          id?: number
          label: string
        }
        Update: {
          associated_table_names?: string[]
          desc?: string | null
          id?: number
          label?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          end_date: string | null
          id: number
          person_id: number
          plan_id: number
          start_date: string
          status_id: number
          trial_end_date: string | null
          trial_start_date: string | null
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: number
          person_id: number
          plan_id: number
          start_date: string
          status_id: number
          trial_end_date?: string | null
          trial_start_date?: string | null
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: number
          person_id?: number
          plan_id?: number
          start_date?: string
          status_id?: number
          trial_end_date?: string | null
          trial_start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_person_id_fkey"
            columns: ["person_id"]
            referencedRelation: "persons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_status_id_fkey"
            columns: ["status_id"]
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      product_attributes:
        | "VEGAN"
        | "GLUTEN_FREE"
        | "FROZEN"
        | "ORGANIC"
        | "NON_GMO"
        | "KOSHER"
        | "HALAL"
        | "DAIRY_FREE"
        | "NUT_FREE"
        | "LOW_SODIUM"
        | "SUGAR_FREE"
        | "LOW_CARB"
        | "LOW_FAT"
        | "ALLERGEN_FREE"
        | "VEGETARIAN"
        | "PESCATARIAN"
        | "PALEO"
        | "WHOLE30"
        | "FAIR_TRADE"
        | "SUSTAINABLE"
        | "LOCALLY_SOURCED"
        | "ARTISANAL"
        | "FREE_RANGE"
        | "GRASS_FED"
        | "CAGE_FREE"
        | "BPA_FREE"
        | "ECO_FRIENDLY_PACKAGING"
        | "BIODEGRADABLE"
        | "RECYCLABLE"
        | "NO_ARTIFICIAL_PRESERVATIVES"
        | "NO_ARTIFICIAL_COLORS_OR_FLAVORS"
        | "SUSTAINABLY_SOURCED_SEAFOOD"
        | "LOW_CALORIE"
        | "DISPOSABLE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
