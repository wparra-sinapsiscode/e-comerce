import { useState, useEffect, useMemo, memo } from 'react'
import styled from 'styled-components'
import { Store, Menu, Search, ShoppingCart, User, LogOut, Home, Tags, ClipboardList, Plus, Minus, Eye, ArrowLeft, MapPin, Phone, CreditCard, Smartphone, DollarSign, Truck, CheckCircle, X, Info, Upload, Image, FileText, Filter, Heart, Star, Zap } from 'lucide-react'
import { getUnitConfig, formatQuantity, validateQuantity } from '../data/sampleData'
import Loader from './Loader'

const ClientSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ClientHeader = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 90;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`

const MenuToggle = styled.div`
  display: none;
  margin-right: 15px;
  cursor: pointer;
  font-size: 20px;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
  
  h1 {
    font-size: 20px;
    font-weight: 600;
    color: var(--gray-dark);
  }
`

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--gray-lighter);
  border-radius: 30px;
  padding: 12px 18px;
  max-width: 400px;
  width: 100%;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:focus-within {
    background-color: white;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  svg {
    color: var(--gray);
    margin-right: 12px;
    transition: color 0.3s ease;
  }
  
  &:focus-within svg {
    color: var(--primary-color);
  }
  
  input {
    background: transparent;
    border: none;
    flex: 1;
    font-size: 14px;
    color: var(--gray-dark);
    
    &::placeholder {
      color: var(--gray);
    }
    
    &:focus {
      outline: none;
    }
  }
  
  @media (max-width: 576px) {
    display: flex;
    max-width: none;
    margin: 0 20px;
  }
`

const QuickFilters = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
  
  @media (max-width: 576px) {
    margin: 15px 0;
    gap: 8px;
  }
`

const FilterChip = styled.button`
  padding: 8px 16px;
  background: ${props => props.$active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.$active ? 'white' : 'var(--gray-dark)'};
  border: 1px solid ${props => props.$active ? 'var(--primary-color)' : '#e2e8f0'};
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: ${props => props.$active ? 'var(--primary-color)' : '#f8fafc'};
    transform: translateY(-1px);
  }

  svg {
    width: 14px;
    height: 14px;
  }
  
  @media (max-width: 576px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 20px;
`

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--primary-color);
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const UserMenu = styled.div`
  position: relative;
  cursor: pointer;
`

const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`

const UserDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  width: 180px;
  display: none;
  z-index: 100;
  
  ${UserMenu}:hover & {
    display: block;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    padding: 12px 15px;
    display: flex;
    align-items: center;
    transition: var(--transition);
    cursor: pointer;
    
    &:hover {
      background-color: var(--gray-lighter);
    }
    
    svg {
      margin-right: 10px;
      color: var(--gray);
    }
  }
`

const Sidebar = styled.div`
  width: 250px;
  height: calc(100vh - 65px);
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  padding: 20px;
  position: fixed;
  left: 0;
  top: 65px;
  overflow-y: auto;
  z-index: 80;
  
  h3 {
    margin-bottom: 15px;
    color: var(--gray-dark);
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    width: 0;
    transform: translateX(-100%);
    transition: var(--transition);
    
    &.active {
      width: 250px;
      transform: translateX(0);
    }
  }
`

const CategoryList = styled.ul`
  list-style: none;
  
  li {
    padding: 10px 15px;
    border-radius: var(--radius);
    margin-bottom: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: var(--transition);
    
    &:hover {
      background-color: var(--gray-lighter);
    }
    
    &.active {
      background-color: var(--primary-light);
      color: var(--primary-dark);
    }
    
    svg {
      margin-right: 10px;
      font-size: 16px;
    }
  }
`

const ClientContent = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: 20px;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding-bottom: 70px;
  }
`

const ClientView = styled.div`
  display: ${props => props.$active ? 'block' : 'none'};
`

const HeroBanner = styled.div`
  height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1000');
  background-size: cover;
  background-position: center;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 30px;
  color: white;
  
  @media (max-width: 576px) {
    height: 200px;
  }
`

const HeroContent = styled.div`
  max-width: 600px;
  
  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    
    @media (max-width: 576px) {
      font-size: 20px;
    }
  }
  
  p {
    margin-bottom: 20px;
    font-size: 16px;
  }
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
  }
`

const ProductCard = styled.div`
  background-color: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  &.cart-animation {
    animation: addToCartPulse 0.6s ease;
  }
  
  @keyframes addToCartPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`

const ProductFavorite = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${props => props.$isFavorite ? '#ef4444' : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.$isFavorite ? 'white' : '#6b7280'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 2;
  
  &:hover {
    background: ${props => props.$isFavorite ? '#dc2626' : 'white'};
    transform: scale(1.1);
  }
`

const QuickAddButton = styled.button`
  flex: 1;
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  
  &:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const ProductImage = styled.div`
  height: 180px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`

const ProductContent = styled.div`
  padding: 16px;
`

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--gray-dark);
  line-height: 1.3;
`

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 12px;
  
  .unit {
    font-size: 12px;
    color: var(--gray);
    font-weight: normal;
    margin-left: 4px;
  }
`

const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  .quantity-btn {
    width: 32px;
    height: 32px;
    border: 1px solid #e2e8f0;
    background: white;
    color: var(--gray-dark);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 500;
    
    &:hover:not(:disabled) {
      background: var(--gray-lighter);
      border-color: var(--primary-color);
    }
    
    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
  
  .quantity-display {
    min-width: 40px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color: var(--gray-dark);
    transition: all 0.3s ease;
    
    &.quantity-pulse {
      animation: quantityPulse 0.3s ease;
    }
  }
  
  @keyframes quantityPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); color: var(--primary-color); }
    100% { transform: scale(1); }
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  
  .add-to-cart-btn {
    flex: 1;
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 13px;
    
    &:hover {
      background: var(--primary-dark);
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
  
  .view-details {
    background: var(--gray-lighter);
    color: var(--gray-dark);
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: var(--gray-light);
    }
  }
`

const ProductBadge = styled.span`
  background: ${props => props.$color || '#6b7280'};
  color: white;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 500;
  margin-bottom: 8px;
  display: inline-block;
`

const PresentationSelector = styled.div`
  margin-bottom: 12px;
  
  .label {
    font-size: 12px;
    color: var(--gray);
    margin-bottom: 6px;
    display: block;
  }
  
  .presentations {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  
  .presentation-option {
    font-size: 11px;
    padding: 4px 8px;
    border: 1px solid #e2e8f0;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &.selected {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }
    
    &:hover:not(.selected) {
      border-color: var(--primary-color);
      background: var(--gray-lighter);
    }
  }
`


const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const CartItems = styled.div`
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px;
`

const CartItem = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

const CartItemImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: var(--radius);
  overflow: hidden;
  margin-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`

const CartItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const CartItemName = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`

const CartItemPrice = styled.div`
  color: var(--gray);
  font-size: 14px;
  margin-bottom: 5px;
`

const CartItemControls = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: var(--radius);
  overflow: hidden;
  margin-right: 15px;
  
  button {
    width: 30px;
    height: 30px;
    background-color: var(--gray-lighter);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover:not(:disabled) {
      background-color: var(--primary-color);
      color: white;
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: var(--gray-light);
    }
  }
  
  input {
    width: 40px;
    height: 30px;
    border: none;
    text-align: center;
    font-size: 14px;
  }
`

const CartSummary = styled.div`
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 20px;
  height: fit-content;
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  
  &.total {
    border-top: 1px solid #eee;
    padding-top: 15px;
    margin-top: 15px;
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-color);
  }
`

const MobileNav = styled.div`
  display: none;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  justify-content: space-around;
  
  @media (max-width: 768px) {
    display: flex;
  }
`

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  color: var(--gray);
  cursor: pointer;
  
  svg {
    font-size: 20px;
    margin-bottom: 3px;
  }
  
  &.active {
    color: var(--primary-color);
  }
`

const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background-color: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const ProductDetailImage = styled.div`
  height: 400px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProductDetailInfo = styled.div`
  padding: 30px;
  
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`

const CategoryBadge = styled.div`
  display: inline-block;
  background-color: ${props => props.color};
  color: white;
  font-size: 13px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 15px;
`

const DetailPrice = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 20px;
  
  span {
    font-size: 14px;
    color: var(--gray);
    margin-left: 5px;
    font-weight: normal;
  }
`

const Description = styled.div`
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 30px;
`

const QuantitySection = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 10px;
    color: var(--gray);
    font-size: 14px;
  }
`

const QuantityInput = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  
  button {
    width: 40px;
    height: 40px;
    background-color: var(--gray-lighter);
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:first-child {
      border-radius: var(--radius) 0 0 var(--radius);
    }
    
    &:last-child {
      border-radius: 0 var(--radius) var(--radius) 0;
    }
  }
  
  input {
    width: 70px;
    height: 40px;
    border-radius: 0;
    text-align: center;
    border-left: none;
    border-right: none;
  }
`

const TotalPrice = styled.div`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 500;
  
  span:first-child {
    color: var(--gray);
    margin-right: 10px;
  }
  
  span:last-child {
    color: var(--primary-color);
    font-weight: 600;
  }
`

const CheckoutForm = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`

const FormGroup = styled.div`
  margin-bottom: 25px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-color);
    font-size: 14px;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: var(--radius);
    font-size: 14px;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(233, 69, 96, 0.1);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 80px;
  }
`

const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  margin-top: 10px;
`

const PaymentMethod = styled.div`
  padding: 15px;
  border: 2px solid ${props => props.$active ? 'var(--primary-color)' : '#ddd'};
  border-radius: var(--radius);
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  background: ${props => props.$active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.$active ? 'white' : 'var(--text-color)'};
  
  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-1px);
  }
  
  svg {
    margin-bottom: 8px;
  }
  
  span {
    display: block;
    font-size: 12px;
    font-weight: 500;
  }
`

const OrderSummary = styled.div`
  background: #f8f9fa;
  border-radius: var(--radius);
  padding: 20px;
  margin-bottom: 25px;
  
  h3 {
    margin-bottom: 15px;
    color: var(--text-color);
  }
`

const CheckoutSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
    font-weight: 600;
    margin-top: 10px;
    padding-top: 15px;
    border-top: 2px solid #ddd;
  }
  
  .item-details {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .quantity {
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
  }
`

const PaymentDetails = styled.div`
  background: #f8f9fa;
  border: 2px solid var(--primary-color);
  border-radius: var(--radius);
  padding: 20px;
  margin-top: 15px;
  
  h4 {
    color: var(--primary-color);
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .payment-info {
    margin-bottom: 15px;
    
    p {
      margin: 5px 0;
      line-height: 1.5;
      
      strong {
        color: var(--text-color);
      }
    }
  }
  
  .instruction {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 6px;
    padding: 10px;
    margin-top: 10px;
    color: #856404;
    font-size: 14px;
    line-height: 1.4;
  }
  
  .qr-code {
    text-align: center;
    margin: 15px 0;
    
    img {
      max-width: 150px;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }
  }
`

const VoucherUpload = styled.div`
  margin-top: 20px;
  
  .voucher-label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-weight: 500;
    color: var(--text-color);
    font-size: 14px;
  }
  
  .upload-area {
    border: 2px dashed #ddd;
    border-radius: var(--radius);
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    background: #fafafa;
    
    &:hover {
      border-color: var(--primary-color);
      background: #f0f0f0;
    }
    
    &.dragover {
      border-color: var(--primary-color);
      background: rgba(233, 69, 96, 0.1);
    }
  }
  
  .upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    svg {
      color: var(--gray);
    }
    
    p {
      margin: 0;
      color: var(--gray);
      font-size: 14px;
    }
    
    .file-types {
      font-size: 12px;
      color: var(--gray);
    }
  }
  
  .voucher-preview {
    margin-top: 15px;
    padding: 15px;
    background: white;
    border-radius: var(--radius);
    border: 1px solid #ddd;
    
    .preview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      
      span {
        font-weight: 500;
        color: var(--text-color);
      }
      
      button {
        background: none;
        border: none;
        color: var(--primary-color);
        cursor: pointer;
        padding: 5px;
        border-radius: 4px;
        
        &:hover {
          background: rgba(233, 69, 96, 0.1);
        }
      }
    }
    
    .preview-content {
      display: flex;
      align-items: center;
      gap: 15px;
      
      .file-icon {
        width: 60px;
        height: 60px;
        background: #f8f9fa;
        border-radius: var(--radius);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary-color);
      }
      
      .file-info {
        flex: 1;
        
        .file-name {
          font-weight: 500;
          color: var(--text-color);
          margin-bottom: 5px;
          word-break: break-word;
        }
        
        .file-size {
          font-size: 12px;
          color: var(--gray);
        }
      }
      
      img {
        max-width: 100px;
        max-height: 60px;
        border-radius: 4px;
        object-fit: cover;
      }
    }
  }
  
  input[type="file"] {
    display: none;
  }
`

const ConfirmationCard = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 30px;
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  text-align: center;
  
  .success-icon {
    color: #22c55e;
    margin-bottom: 20px;
  }
  
  h2 {
    color: var(--text-color);
    margin-bottom: 15px;
  }
  
  p {
    color: var(--gray);
    margin-bottom: 25px;
    line-height: 1.6;
  }
  
  .order-id {
    background: #f8f9fa;
    padding: 15px;
    border-radius: var(--radius);
    margin: 20px 0;
    font-family: monospace;
    font-weight: 600;
    color: var(--primary-color);
  }
`

function ClientStore({ 
  user, 
  logout, 
  categories, 
  products, 
  cart, 
  setCart, 
  orders, 
  paymentInfo, 
  showToast,
  // API services
  categoryService,
  productService,
  orderService,
  paymentService,
  servicesInitialized
}) {
  const [activeView, setActiveView] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [productQuantity, setProductQuantity] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name') // 'name', 'price-low', 'price-high'
  const [quickFilter, setQuickFilter] = useState('all') // 'all', 'favorites', 'offers'
  const [favorites, setFavorites] = useState(new Set())
  const [cartAnimation, setCartAnimation] = useState(null)
  const [productQuantities, setProductQuantities] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    phone: '',
    address: '',
    reference: '',
    paymentMethod: 'transfer',
    notes: ''
  })
  const [orderConfirmed, setOrderConfirmed] = useState(false)
  const [confirmedOrder, setConfirmedOrder] = useState(null)
  // Estados para manejar el comprobante
  const [voucherFile, setVoucherFile] = useState(null)
  const [voucherPreview, setVoucherPreview] = useState(null)
  const [selectedPresentations, setSelectedPresentations] = useState({})

  // Filter and sort products based on category, search, and other filters
  const getFilteredProducts = useMemo(() => {
    let filtered = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category_id === parseInt(selectedCategory))
    }

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Quick filters
    if (quickFilter === 'favorites') {
      filtered = filtered.filter(product => favorites.has(product.id))
    } else if (quickFilter === 'offers') {
      // Filter products with prices ending in .90 or .95 (simulate offers)
      filtered = filtered.filter(product => {
        const decimal = product.price % 1
        return decimal >= 0.90 || decimal >= 0.95
      })
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'name':
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return filtered
  }, [products, selectedCategory, searchTerm, quickFilter, sortBy, favorites])

  // Functions for improved UX
  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
      showToast('Eliminado de favoritos', 'info')
    } else {
      newFavorites.add(productId)
      showToast('Agregado a favoritos', 'success')
    }
    setFavorites(newFavorites)
  }

  const quickAddToCart = (product) => {
    const displayUnit = getProductDisplayUnit(product)
    const quantity = productQuantities[product.id] || getUnitConfig(displayUnit).minQuantity
    
    // Create product object with presentation info for cart
    const productForCart = {
      ...product,
      price: getProductPrice(product),
      unit: displayUnit,
      selectedPresentation: product.unit === 'presentation' ? getSelectedPresentation(product.id) : null
    }
    
    addToCart(productForCart, quantity)
    setCartAnimation(product.id)
    setTimeout(() => setCartAnimation(null), 600)
    
    // Reset quantity to minimum after adding to cart
    const unitConfig = getUnitConfig(displayUnit)
    setProductQuantities(prev => ({
      ...prev,
      [product.id]: unitConfig.minQuantity
    }))
  }

  // Functions for quantity controls
  const getProductQuantity = (productId) => {
    const product = products.find(p => p.id === productId)
    const displayUnit = getProductDisplayUnit(product)
    const unitConfig = getUnitConfig(displayUnit)
    return productQuantities[productId] || unitConfig.minQuantity
  }

  const updateProductQuantity = (productId, newQuantity) => {
    const product = products.find(p => p.id === productId)
    const displayUnit = getProductDisplayUnit(product)
    const validQuantity = validateQuantity(newQuantity, displayUnit)
    setProductQuantities(prev => ({
      ...prev,
      [productId]: validQuantity
    }))
  }

  const incrementQuantity = (productId) => {
    const product = products.find(p => p.id === productId)
    const displayUnit = getProductDisplayUnit(product)
    const unitConfig = getUnitConfig(displayUnit)
    const currentQty = getProductQuantity(productId)
    updateProductQuantity(productId, currentQty + unitConfig.step)
    // Visual feedback
    setCartAnimation(`${productId}-inc`)
    setTimeout(() => setCartAnimation(null), 300)
  }

  const decrementQuantity = (productId) => {
    const product = products.find(p => p.id === productId)
    const displayUnit = getProductDisplayUnit(product)
    const unitConfig = getUnitConfig(displayUnit)
    const currentQty = getProductQuantity(productId)
    if (currentQty > unitConfig.minQuantity) {
      updateProductQuantity(productId, currentQty - unitConfig.step)
      // Visual feedback
      setCartAnimation(`${productId}-dec`)
      setTimeout(() => setCartAnimation(null), 300)
    }
  }

  // Functions for presentation management
  const getSelectedPresentation = (productId) => {
    const product = products.find(p => p.id === productId)
    if (!product?.presentations) return null
    return selectedPresentations[productId] || product.presentations[0]
  }

  const selectPresentation = (productId, presentation) => {
    setSelectedPresentations(prev => ({
      ...prev,
      [productId]: presentation
    }))
  }

  // Price formatting utility - ALWAYS returns a valid number
  const formatPrice = (price) => {
    const numPrice = Number(price) || 0
    return numPrice.toFixed(2)
  }

  // Safe price getter - ALWAYS returns a valid number
  const getProductPrice = (product) => {
    if (product.unit === 'presentation') {
      const selectedPresentation = getSelectedPresentation(product.id)
      return Number(selectedPresentation?.price) || Number(product.price) || 0
    }
    return Number(product.price) || 0
  }

  const getProductDisplayUnit = (product) => {
    if (product.unit === 'presentation') {
      const selectedPresentation = getSelectedPresentation(product.id)
      return selectedPresentation?.unit || 'u'
    }
    return product.unit
  }

  const viewProductDetails = (productId) => {
    const product = products.find(p => p.id === productId)
    if (product) {
      setSelectedProduct(product)
      setProductQuantity(1)
      setActiveView('product-details')
    }
  }

  const addToCart = (product = selectedProduct, quantity = productQuantity) => {
    if (!product || quantity <= 0) return

    const existingItemIndex = cart.findIndex(item => item.product_id === product.id)
    
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity += quantity
      updatedCart[existingItemIndex].total = updatedCart[existingItemIndex].price * updatedCart[existingItemIndex].quantity
      setCart(updatedCart)
    } else {
      const newItem = {
        product_id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        quantity: quantity,
        total: product.price * quantity,
        image: product.image
      }
      setCart([...cart, newItem])
    }

    showToast('Producto agregado al carrito', 'success')
  }

  const updateCartQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(index)
      return
    }

    const updatedCart = [...cart]
    const item = updatedCart[index]
    const unitConfig = getUnitConfig(item.unit)
    
    // Redondear la cantidad según el tipo de unidad
    const validQuantity = unitConfig.allowDecimals 
      ? Math.max(unitConfig.minQuantity, parseFloat(newQuantity.toFixed(unitConfig.displayDecimals)))
      : Math.max(unitConfig.minQuantity, Math.floor(newQuantity))
    
    updatedCart[index].quantity = validQuantity
    // Calcular total con precisión de 2 decimales para precio
    updatedCart[index].total = parseFloat((updatedCart[index].price * validQuantity).toFixed(2))
    setCart(updatedCart)
  }

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index)
    setCart(updatedCart)
    showToast('Producto eliminado del carrito', 'success')
  }

  const getCartTotals = () => {
    const subtotal = cart.reduce((acc, item) => acc + item.total, 0)
    const tax = subtotal * 0.18
    const total = subtotal + tax
    return { subtotal, tax, total }
  }

  const selectCategory = (categoryId) => {
    setSelectedCategory(categoryId)
    setActiveView('products')
    setSidebarOpen(false)
  }

  const { subtotal, tax, total } = getCartTotals()

  // Render payment details based on selected method
  const renderPaymentDetails = () => {
    if (!paymentInfo) return null
    
    const method = checkoutData.paymentMethod
    
    if (method === 'CASH') {
      return (
        <PaymentDetails>
          <h4>
            <DollarSign size={20} />
            Pago contraentrega
          </h4>
          <div className="instruction">
            <Info size={16} style={{ marginRight: '8px', verticalAlign: 'text-top' }} />
            <strong>Instrucciones:</strong> {paymentInfo.instructions[method.toLowerCase()]}
          </div>
        </PaymentDetails>
      )
    }
    
    const methodData = paymentInfo[method.toLowerCase()]
    const instruction = paymentInfo.instructions[method.toLowerCase()]
    
    return (
      <PaymentDetails>
        <h4>
          {method === 'TRANSFER' && <CreditCard size={20} />}
          {method === 'YAPE' && <Smartphone size={20} />}
          {method === 'PLIN' && <Smartphone size={20} />}
          Datos para el pago - Total: S/ {formatPrice(total)}
        </h4>
        
        <div className="payment-info">
          {method === 'TRANSFER' && (
            <>
              <p><strong>Banco:</strong> {methodData.bankName}</p>
              <p><strong>Número de cuenta:</strong> {methodData.accountNumber}</p>
              <p><strong>Tipo de cuenta:</strong> {methodData.accountType}</p>
              <p><strong>Titular:</strong> {methodData.accountHolder}</p>
              <p><strong>CCI:</strong> {methodData.cci}</p>
            </>
          )}
          
          {(method === 'YAPE' || method === 'PLIN') && (
            <>
              <p><strong>Número de teléfono:</strong> {methodData.phoneNumber}</p>
              <div className="qr-code">
                <img src={methodData.qrCode} alt={`QR ${method}`} />
                <p>Escanea el código QR</p>
              </div>
            </>
          )}
        </div>
        
        <div className="instruction">
          <Info size={16} style={{ marginRight: '8px', verticalAlign: 'text-top' }} />
          <strong>Instrucciones:</strong> {instruction}
        </div>
      </PaymentDetails>
    )
  }

  // Checkout functions
  const handleCheckoutSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!checkoutData.name || !checkoutData.phone || !checkoutData.address) {
      showToast('Por favor complete todos los campos obligatorios', 'error')
      return
    }
    
    try {
      setIsLoading(true)
      
      // Create order data
      const orderData = {
        customer_name: checkoutData.name,
        customer_phone: checkoutData.phone,
        customer_address: checkoutData.address,
        customer_reference: checkoutData.reference,
        payment_method: checkoutData.paymentMethod,
        notes: checkoutData.notes,
        items: cart.map(item => ({
          product_id: item.product_id,
          quantity: item.quantity,
          unit_price: item.price,
          total_price: item.total
        })),
        subtotal,
        tax_amount: tax,
        total_amount: total
        // VOUCHER: Temporalmente deshabilitado
        // voucher_file: voucherFile
      }
      
      console.log('🛒 ClientStore: Datos de la orden listos para enviar:', orderData);
      
      // PASO 1: Crear la orden (sin voucher)
      // VOUCHER: Temporalmente deshabilitado - no hay voucher_file que extraer
      // const { voucher_file, ...orderDataWithoutVoucher } = orderData
      const orderResponse = await orderService.createOrder(orderData)
      
      if (orderResponse.success) {
        console.log('✅ Orden creada exitosamente:', orderResponse);
        const orderId = orderResponse.data?.id || orderResponse.data?.data?.id;
        console.log('🆔 Order ID extraído:', orderId);
        
        // PASO 2: Crear el pago para métodos que requieren comprobante
        if (['TRANSFER', 'YAPE', 'PLIN'].includes(orderData.payment_method)) {
          console.log('📄 Creando pago (backend pattern)...');
          
          // Validar que todos los datos requeridos estén presentes
          if (!orderId) {
            console.error('❌ Error: orderId es undefined');
            showToast('Error: No se pudo obtener el ID de la orden', 'error');
            return;
          }
          
          if (!orderData.customer_name || !orderData.customer_phone) {
            console.error('❌ Error: Faltan datos del cliente', {
              customer_name: orderData.customer_name,
              customer_phone: orderData.customer_phone
            });
            showToast('Error: Faltan datos del cliente', 'error');
            return;
          }
          
          // PASO 2A: Crear pago con todos los campos requeridos por el schema
          const paymentData = {
            order_id: orderId,
            method: orderData.payment_method, // ✅ Ya almacenado en mayúsculas
            amount: parseFloat(total),
            // Agregar el voucher Base64 si existe
            ...(checkoutData.voucherBase64 && { voucher: checkoutData.voucherBase64 })
          }
          
          // Debug adicional
          console.log('🔍 Validando tipos de datos:', {
            order_id: typeof orderId,
            customer_name: typeof orderData.customer_name,
            customer_phone: typeof orderData.customer_phone,
            method: typeof paymentData.method,
            amount: typeof paymentData.amount,
            methodValue: paymentData.method,
            amountValue: paymentData.amount
          });
          
          console.log('💳 Payment data (sin voucher):', paymentData);
          
          // VOUCHER: Temporalmente deshabilitado - omitir verificación de pagos duplicados
          // // Verificar si ya existe un pago para esta orden
          // try {
          //   const existingPayment = await paymentService.getPaymentByOrder(orderId);
          //   if (existingPayment.success) {
          //     console.warn('⚠️ Ya existe un pago para esta orden:', existingPayment.data);
          //     showToast('Esta orden ya tiene un pago asociado', 'warning');
          //     return;
          //   }
          // } catch (checkError) {
          //   console.log('✅ No existe pago previo para esta orden (esperado)');
          // }
          
          // Test validación frontend antes de enviar (TEMPORAL - omitido por inconsistencia backend)
          console.log('⚠️ Omitiendo validación frontend debido a inconsistencia con backend controller');
          // try {
          //   const { validateCreatePayment } = await import('../schemas/payment.schema.js');
          //   const validation = validateCreatePayment(paymentData);
          //   console.log('🔍 Validación frontend:', validation);
          //   if (!validation.success) {
          //     console.error('❌ Error validación frontend:', validation.error);
          //   }
          // } catch (validationTestError) {
          //   console.error('Error testing frontend validation:', validationTestError);
          // }
          
          const paymentResponse = await paymentService.createPayment(paymentData)
          
          if (paymentResponse.success) {
            console.log('✅ Pago creado exitosamente:', paymentResponse.data.id);
            showToast('Pago registrado correctamente', 'success')
            
            // VOUCHER: Temporalmente deshabilitado
            // // PASO 2B: Subir voucher por separado
            // console.log('📷 Subiendo voucher...');
            // const voucherResponse = await paymentService.uploadVoucher(
            //   paymentResponse.data.id,
            //   voucherFile  // archivo original, no base64
            // )
            // 
            // if (voucherResponse.success) {
            //   console.log('✅ Voucher subido exitosamente');
            // } else {
            //   console.error('❌ Error subiendo voucher:', voucherResponse.error);
            //   showToast('Pago creado pero falló la subida del comprobante', 'warning')
            // }
          } else {
            console.error('❌ Error creando pago:', paymentResponse.error);
            console.error('❌ Errores específicos:', paymentResponse.error?.errors);
            console.error('❌ Datos enviados que fallaron:', paymentData);
            showToast('Pedido creado pero falló el registro del pago', 'warning')
          }
        } else if (orderData.payment_method === 'CASH') {
          // PASO 2: Crear pago para efectivo (sin comprobante)
          console.log('💰 Creando pago en efectivo...');
          
          const paymentData = {
            order_id: orderId,
            method: orderData.payment_method,
            amount: parseFloat(total)
            // No voucher para efectivo
          }
          
          console.log('💳 Payment data (efectivo):', paymentData);
          
          const paymentResponse = await paymentService.createPayment(paymentData)
          
          if (paymentResponse.success) {
            console.log('✅ Pago en efectivo registrado exitosamente:', paymentResponse.data);
          } else {
            console.error('❌ Error creando pago en efectivo:', paymentResponse.error);
            showToast('Pedido creado pero falló el registro del pago', 'warning')
          }
        }
        
        // Clear cart and set confirmed order
        console.log('📦 Orden completa:', orderResponse.data);
        setCart([])
        setConfirmedOrder({
          id: orderId,
          customer_name: orderData.customer_name,
          phone: orderData.customer_phone,           // ✅ Corregido: phone no customer_phone
          address: orderData.customer_address,       // ✅ Corregido: address no customer_address
          payment_method: orderData.payment_method,
          total: orderData.total_amount,             // ✅ Corregido: total no total_amount
          items: orderResponse.data.items || [],
          ...orderResponse.data // Include any additional fields from response
        })
        setOrderConfirmed(true)
        // Limpiar voucher después de confirmar pedido
        setVoucherFile(null)
        setVoucherPreview(null)
        setCheckoutData(prev => ({ ...prev, voucherBase64: null }))
        setActiveView('confirmation')
        showToast('¡Pedido realizado con éxito!', 'success')
      } else {
        showToast(orderResponse.message || 'Error al procesar el pedido', 'error')
      }
    } catch (error) {
      console.error('Checkout error:', error)
      showToast('Error al procesar el pedido. Inténtalo de nuevo.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field, value) => {
    setCheckoutData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const goToCheckout = () => {
    if (cart.length === 0) {
      showToast('Tu carrito está vacío', 'error')
      return
    }
    
    // Auto-fill form with user data
    setCheckoutData({
      name: user.name || '',
      phone: user.phone || '',
      address: user.address || '',
      reference: '',
      paymentMethod: 'transfer',
      notes: ''
    })
    
    setActiveView('checkout')
  }

  const resetCheckout = () => {
    setCheckoutData({
      name: '',
      phone: '',
      address: '',
      reference: '',
      paymentMethod: 'transfer',
      notes: ''
    })
    setOrderConfirmed(false)
    setConfirmedOrder(null)
    setVoucherFile(null)
    setVoucherPreview(null)
    setActiveView('home')
  }

  // Voucher handling functions
  // VOUCHER: Temporalmente deshabilitado
  const handleVoucherUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      processVoucherFile(file)
    }
  }

  const processVoucherFile = (file) => {
    // Validate file type (solo imágenes para Base64)
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      showToast('Solo se permiten archivos de imagen (JPG, PNG, GIF)', 'error')
      return
    }

    // Validate file size (max 2MB para Base64)
    if (file.size > 2 * 1024 * 1024) {
      showToast('El archivo no puede superar los 2MB', 'error')
      return
    }

    // Convertir a Base64 como hacemos con productos
    const reader = new FileReader()
    reader.onload = (e) => {
      const base64String = e.target.result
      setVoucherFile(file)
      setVoucherPreview(base64String)
      // Guardamos el Base64 en checkoutData para enviarlo al backend
      setCheckoutData(prev => ({
        ...prev,
        voucherBase64: base64String
      }))
    }
    reader.readAsDataURL(file)

    showToast('Comprobante adjuntado correctamente', 'success')
  }

  const removeVoucher = () => {
    setVoucherFile(null)
    setVoucherPreview(null)
    // Limpiar Base64 de checkoutData
    setCheckoutData(prev => ({
      ...prev,
      voucherBase64: null
    }))
    showToast('Comprobante eliminado', 'info')
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // VOUCHER: Temporalmente deshabilitado
  // // Render voucher upload component
  const renderVoucherUpload = () => {
    // Don't show voucher upload for cash payments or if no payment method selected
    if (!checkoutData.paymentMethod || checkoutData.paymentMethod === 'CASH') {
      return null
    }

    // Only show for transfer, yape, and plin
    if (!['TRANSFER', 'YAPE', 'PLIN'].includes(checkoutData.paymentMethod)) {
      return null
    }

    return (
      <VoucherUpload>
        <div className="voucher-label">
          <Upload size={16} />
          Comprobante de pago (opcional)
        </div>
        
        {!voucherFile ? (
          <>
            <div 
              className="upload-area"
              onClick={() => document.getElementById('voucher-input').click()}
            >
              <div className="upload-content">
                <Upload size={40} />
                <p>Haz clic para subir tu comprobante de pago</p>
                <p className="file-types">Formatos: JPG, PNG, GIF (máx. 2MB)</p>
              </div>
            </div>
            <input
              id="voucher-input"
              type="file"
              accept=".jpg,.jpeg,.png,.gif"
              onChange={handleVoucherUpload}
              style={{ display: 'none' }}
            />
          </>
        ) : (
          <div className="voucher-preview">
            <div className="preview-header">
              <span>Comprobante adjuntado</span>
              <button type="button" onClick={removeVoucher}>
                <X size={16} />
              </button>
            </div>
            <div className="preview-content">
              {voucherPreview && <img src={voucherPreview} alt="Preview" />}
              <div className="file-info">
                <div className="file-name">{voucherFile.name}</div>
                <div className="file-size">{formatFileSize(voucherFile.size)}</div>
              </div>
            </div>
          </div>
        )
      }
      </VoucherUpload>
    )
  }
  //               <>
  //                 <div className="file-icon">
  //                   <FileText size={24} />
  //                 </div>
  //                 <div className="file-info">
  //                   <div className="file-name">{voucherFile.name}</div>
  //                   <div className="file-size">{formatFileSize(voucherFile.size)}</div>
  //                 </div>
  //               </>
  //             )}
  //           </div>
  //         </div>
  //       )}
  //     </VoucherUpload>
  //   )
  // }

  // Get featured categories and products for home view
  const featuredCategories = categories.slice(0, 4)
  const featuredProducts = products.slice(0, 6)

  return (
    <ClientSection>
      {isLoading && <Loader />}
      <ClientHeader>
        <HeaderLeft>
          <MenuToggle onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={20} />
          </MenuToggle>
          <Logo>
            <Store size={24} />
            <h1>Mercado Express</h1>
          </Logo>
        </HeaderLeft>
        <HeaderRight>
          <SearchBar>
            <Search size={16} />
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                if (e.target.value) {
                  setActiveView('products')
                }
              }}
            />
          </SearchBar>
          <CartIcon onClick={() => setActiveView('cart')}>
            <ShoppingCart size={20} />
            <CartCount>{cart.length}</CartCount>
          </CartIcon>
          <UserMenu>
            <ProfileImg>C</ProfileImg>
            <UserDropdown>
              <ul>
                <li onClick={() => setActiveView('orders')}>
                  <ClipboardList size={16} />
                  Mis pedidos
                </li>
                <li onClick={() => setActiveView('account')}>
                  <User size={16} />
                  Mi cuenta
                </li>
                <li onClick={logout}>
                  <LogOut size={16} />
                  Cerrar sesión
                </li>
              </ul>
            </UserDropdown>
          </UserMenu>
        </HeaderRight>
      </ClientHeader>

      <Sidebar className={sidebarOpen ? 'active' : ''}>
        <h3>Categorías</h3>
        <CategoryList>
          <li 
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => selectCategory('all')}
          >
            <Tags size={16} />
            Todos los productos
          </li>
          {categories.map(category => (
            <li 
              key={category.id}
              className={selectedCategory === category.id.toString() ? 'active' : ''}
              onClick={() => selectCategory(category.id.toString())}
            >
              {category.name}
            </li>
          ))}
        </CategoryList>
      </Sidebar>

      <ClientContent>
        {/* Home View */}
        <ClientView $active={activeView === 'home'}>
          <HeroBanner>
            <HeroContent>
              <h2>Los mejores productos frescos del mercado</h2>
              <p>Selecciona tus productos favoritos y recíbelos en la puerta de tu casa.</p>
              <button 
                className="btn btn-primary"
                onClick={() => setActiveView('products')}
              >
                Explorar productos
              </button>
            </HeroContent>
          </HeroBanner>
          
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ marginBottom: '15px', color: 'var(--gray-dark)', fontSize: '20px' }}>Categorías populares</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
              {featuredCategories.map(category => (
                <div 
                  key={category.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                  onClick={() => selectCategory(category.id.toString())}
                >
                  <div style={{
                    height: '100px',
                    backgroundColor: category.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Tags size={36} color="white" />
                  </div>
                  <h4 style={{ padding: '10px', fontSize: '16px' }}>{category.name}</h4>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '15px', color: 'var(--gray-dark)', fontSize: '20px' }}>Productos destacados</h3>
            <ProductsGrid>
              {featuredProducts.map(product => {
                const category = categories.find(c => c.id === product.category_id)
                const isFavorite = favorites.has(product.id)
                const isAnimating = cartAnimation === product.id
                
                return (
                  <ProductCard 
                    key={product.id}
                    className={isAnimating ? 'cart-animation' : ''}
                  >
                    <ProductImage>
                      <img src={product.image} alt={product.name} />
                      <ProductFavorite
                        $isFavorite={isFavorite}
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
                      </ProductFavorite>
                    </ProductImage>
                    <ProductContent>
                      <ProductBadge $color={category?.color}>
                        {category?.name || 'Sin categoría'}
                      </ProductBadge>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductPrice>
                        S/ {formatPrice(getProductPrice(product))}
                        <span className="unit">/ {getProductDisplayUnit(product)}</span>
                      </ProductPrice>
                      {product.unit === 'presentation' && (
                        <PresentationSelector>
                          <span className="label">Presentación:</span>
                          <div className="presentations">
                            {product.presentations.map(presentation => (
                              <div
                                key={presentation.id}
                                className={`presentation-option ${getSelectedPresentation(product.id)?.id === presentation.id ? 'selected' : ''}`}
                                onClick={() => selectPresentation(product.id, presentation)}
                              >
                                {presentation.name} - S/ {formatPrice(presentation.price)}
                              </div>
                            ))}
                          </div>
                        </PresentationSelector>
                      )}
                      <ProductActions>
                        <QuantityControls>
                          <button className="quantity-btn" onClick={() => decrementQuantity(product.id)}>
                            <Minus size={16} />
                          </button>
                          <div className={`quantity-display ${cartAnimation === `${product.id}-inc` || cartAnimation === `${product.id}-dec` ? 'quantity-pulse' : ''}`}>
                            {formatQuantity(getProductQuantity(product.id), getProductDisplayUnit(product))}
                          </div>
                          <button className="quantity-btn" onClick={() => incrementQuantity(product.id)}>
                            <Plus size={16} />
                          </button>
                        </QuantityControls>
                        <ActionButtons>
                          <button className="add-to-cart-btn" onClick={() => quickAddToCart(product)}>
                            <ShoppingCart size={16} />
                            Agregar ({formatQuantity(getProductQuantity(product.id), getProductDisplayUnit(product))})
                          </button>
                          <button 
                            className="view-details"
                            onClick={() => viewProductDetails(product.id)}
                          >
                            <Eye size={16} />
                            Ver detalles
                          </button>
                        </ActionButtons>
                      </ProductActions>
                    </ProductContent>
                  </ProductCard>
                )
              })}
            </ProductsGrid>
          </div>
        </ClientView>
        
        {/* Products View */}
        <ClientView $active={activeView === 'products'}>
          <div style={{
            height: '150px',
            background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 'var(--radius)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '20px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '5px' }}>
              {selectedCategory === 'all' ? 'Todos los productos' : 
               categories.find(c => c.id === parseInt(selectedCategory))?.name || 'Productos'}
            </h2>
            <p>Encuentra todo lo que necesitas en un solo lugar</p>
          </div>
          
          {/* Search and Filters */}
          <div style={{ marginBottom: '20px' }}>
            <SearchBar>
              <Search size={18} />
              <input 
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchBar>
            
            <QuickFilters>
              <FilterChip 
                $active={quickFilter === 'all'}
                onClick={() => setQuickFilter('all')}
              >
                <Tags size={14} />
                Todos
              </FilterChip>
              <FilterChip 
                $active={quickFilter === 'favorites'}
                onClick={() => setQuickFilter('favorites')}
              >
                <Heart size={14} />
                Favoritos ({favorites.size})
              </FilterChip>
              <FilterChip 
                $active={quickFilter === 'offers'}
                onClick={() => setQuickFilter('offers')}
              >
                <Zap size={14} />
                Ofertas
              </FilterChip>
              <FilterChip 
                $active={sortBy === 'price-low'}
                onClick={() => setSortBy(sortBy === 'price-low' ? 'name' : 'price-low')}
              >
                Precio: Menor
              </FilterChip>
              <FilterChip 
                $active={sortBy === 'price-high'}
                onClick={() => setSortBy(sortBy === 'price-high' ? 'name' : 'price-high')}
              >
                Precio: Mayor
              </FilterChip>
            </QuickFilters>
          </div>

          <ProductsGrid>
            {getFilteredProducts.map(product => {
              const category = categories.find(c => c.id === product.category_id)
              const isFavorite = favorites.has(product.id)
              const isAnimating = cartAnimation === product.id
              
              return (
                <ProductCard 
                  key={product.id}
                  className={isAnimating ? 'cart-animation' : ''}
                >
                  <ProductImage>
                    <img src={product.image} alt={product.name} />
                    <ProductFavorite
                      $isFavorite={isFavorite}
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
                    </ProductFavorite>
                  </ProductImage>
                  <ProductContent>
                    <ProductBadge $color={category?.color}>
                      {category?.name || 'Sin categoría'}
                    </ProductBadge>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductPrice>
                      S/ {formatPrice(getProductPrice(product))}
                      <span className="unit">/ {getProductDisplayUnit(product)}</span>
                    </ProductPrice>
                    {product.unit === 'presentation' && (
                      <PresentationSelector>
                        <span className="label">Presentación:</span>
                        <div className="presentations">
                          {product.presentations.map(presentation => (
                            <div
                              key={presentation.id}
                              className={`presentation-option ${getSelectedPresentation(product.id)?.id === presentation.id ? 'selected' : ''}`}
                              onClick={() => selectPresentation(product.id, presentation)}
                            >
                              {presentation.name} - S/ {formatPrice(presentation.price)}
                            </div>
                          ))}
                        </div>
                      </PresentationSelector>
                    )}
                    <ProductActions>
                      <QuantityControls>
                        <button 
                          className="quantity-btn"
                          onClick={() => decrementQuantity(product.id)}
                          disabled={getProductQuantity(product.id) <= getUnitConfig(getProductDisplayUnit(product)).minQuantity}
                        >
                          <Minus size={16} />
                        </button>
                        <div className={`quantity-display ${cartAnimation === `${product.id}-inc` || cartAnimation === `${product.id}-dec` ? 'quantity-pulse' : ''}`}>
                          {formatQuantity(getProductQuantity(product.id), getProductDisplayUnit(product))}
                        </div>
                        <button 
                          className="quantity-btn"
                          onClick={() => incrementQuantity(product.id)}
                        >
                          <Plus size={16} />
                        </button>
                      </QuantityControls>
                      
                      <ActionButtons>
                        <button 
                          className="add-to-cart-btn"
                          onClick={() => quickAddToCart(product)}
                        >
                          <ShoppingCart size={16} />
                          Agregar ({formatQuantity(getProductQuantity(product.id), getProductDisplayUnit(product))})
                        </button>
                        <button 
                          className="view-details"
                          onClick={() => viewProductDetails(product.id)}
                        >
                          <Eye size={16} />
                        </button>
                      </ActionButtons>
                    </ProductActions>
                  </ProductContent>
                </ProductCard>
              )
            })}
          </ProductsGrid>
        </ClientView>
        
        {/* Product Details View */}
        <ClientView $active={activeView === 'product-details'}>
          <div style={{ marginBottom: '20px' }}>
            <button 
              className="btn btn-secondary"
              onClick={() => setActiveView('products')}
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <ArrowLeft size={16} />
              Volver
            </button>
          </div>
          
          {selectedProduct && (
            <ProductDetailContainer>
              <ProductDetailImage>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </ProductDetailImage>
              <ProductDetailInfo>
                <h2>{selectedProduct.name}</h2>
                <CategoryBadge color={categories.find(c => c.id === selectedProduct.category_id)?.color || '#666'}>
                  {categories.find(c => c.id === selectedProduct.category_id)?.name || 'Sin categoría'}
                </CategoryBadge>
                <DetailPrice>
                  S/ {formatPrice(selectedProduct.price)} <span>/ {selectedProduct.unit}</span>
                </DetailPrice>
                <Description>{selectedProduct.description}</Description>
                
                <QuantitySection>
                  <label>Cantidad:</label>
                  <QuantityInput>
                    <button 
                      onClick={() => setProductQuantity(Math.max(0.1, productQuantity - 0.1))}
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      min="0.1"
                      step="0.1"
                      value={productQuantity}
                      onChange={(e) => setProductQuantity(parseFloat(e.target.value) || 0.1)}
                    />
                    <button 
                      onClick={() => setProductQuantity(productQuantity + 0.1)}
                    >
                      <Plus size={16} />
                    </button>
                  </QuantityInput>
                </QuantitySection>
                
                <TotalPrice>
                  <span>Total:</span>
                  <span>S/ {formatPrice(selectedProduct.price * productQuantity)}</span>
                </TotalPrice>
                
                <button 
                  className="btn btn-primary"
                  onClick={() => addToCart()}
                  style={{ width: '100%' }}
                >
                  <ShoppingCart size={16} />
                  Agregar al carrito
                </button>
              </ProductDetailInfo>
            </ProductDetailContainer>
          )}
        </ClientView>
        
        {/* Cart View */}
        <ClientView $active={activeView === 'cart'}>
          <h2>Carrito de compras</h2>
          
          <CartContainer>
            <CartItems>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px', color: 'var(--gray)' }}>
                  Tu carrito está vacío
                </div>
              ) : (
                cart.map((item, index) => (
                  <CartItem key={`${item.product_id}-${index}`}>
                    <CartItemImage>
                      <img src={item.image} alt={item.name} />
                    </CartItemImage>
                    <CartItemDetails>
                      <CartItemName>{item.name}</CartItemName>
                      <CartItemPrice>S/ {formatPrice(item.price)} / {item.unit}</CartItemPrice>
                      <CartItemControls>
                        <QuantityControl>
                          <button 
                            onClick={() => {
                              const unitConfig = getUnitConfig(item.unit)
                              const newQuantity = Math.max(
                                unitConfig.minQuantity, 
                                item.quantity - unitConfig.step
                              )
                              updateCartQuantity(index, newQuantity)
                            }}
                            disabled={(() => {
                              const unitConfig = getUnitConfig(item.unit)
                              return item.quantity <= unitConfig.minQuantity
                            })()}
                          >
                            <Minus size={14} />
                          </button>
                          <input
                            type="number"
                            value={(() => {
                              const unitConfig = getUnitConfig(item.unit)
                              return unitConfig.allowDecimals 
                                ? parseFloat(item.quantity).toFixed(unitConfig.displayDecimals)
                                : Math.floor(item.quantity)
                            })()}
                            onChange={(e) => {
                              const unitConfig = getUnitConfig(item.unit)
                              const newValue = parseFloat(e.target.value) || unitConfig.minQuantity
                              const validQuantity = Math.max(unitConfig.minQuantity, newValue)
                              updateCartQuantity(index, validQuantity)
                            }}
                            min={(() => {
                              const unitConfig = getUnitConfig(item.unit)
                              return unitConfig.minQuantity
                            })()}
                            step={(() => {
                              const unitConfig = getUnitConfig(item.unit)
                              return unitConfig.step
                            })()}
                          />
                          <button 
                            onClick={() => {
                              const unitConfig = getUnitConfig(item.unit)
                              const newQuantity = item.quantity + unitConfig.step
                              updateCartQuantity(index, newQuantity)
                            }}
                          >
                            <Plus size={14} />
                          </button>
                        </QuantityControl>
                        <div style={{ fontWeight: '500', fontSize: '16px', marginLeft: 'auto' }}>
                          S/ {formatPrice(item.total)}
                        </div>
                        <button 
                          style={{ 
                            background: 'none', 
                            border: 'none', 
                            color: 'var(--danger-color)', 
                            cursor: 'pointer', 
                            marginLeft: '20px', 
                            fontSize: '18px' 
                          }}
                          onClick={() => removeFromCart(index)}
                        >
                          ×
                        </button>
                      </CartItemControls>
                    </CartItemDetails>
                  </CartItem>
                ))
              )}
            </CartItems>
            
            <CartSummary>
              <h3 style={{ marginBottom: '20px', color: 'var(--gray-dark)' }}>Resumen del pedido</h3>
              <SummaryItem>
                <span>Subtotal:</span>
                <span>S/ {formatPrice(subtotal)}</span>
              </SummaryItem>
              <SummaryItem>
                <span>IGV (18%):</span>
                <span>S/ {formatPrice(tax)}</span>
              </SummaryItem>
              <SummaryItem className="total">
                <span>Total:</span>
                <span>S/ {formatPrice(total)}</span>
              </SummaryItem>
              
              <button 
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '5px' }}
                disabled={cart.length === 0}
                onClick={goToCheckout}
              >
                <Eye size={16} />
                Realizar pedido
              </button>
              <button 
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '5px' }}
                onClick={() => setActiveView('products')}
              >
                <ArrowLeft size={16} />
                Seguir comprando
              </button>
            </CartSummary>
          </CartContainer>
        </ClientView>
        
        {/* Orders View */}
        <ClientView $active={activeView === 'orders'}>
          <h2>Mis pedidos</h2>
          <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius)', padding: '20px', boxShadow: 'var(--shadow)' }}>
            {orders.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--gray)' }}>
                No tienes pedidos realizados
              </div>
            ) : (
              <div>
                {orders.filter(order => order.customer_phone === user.phone || order.customer === user.name).map(order => (
                  <div key={order.id} style={{ 
                    border: '1px solid #eee', 
                    borderRadius: 'var(--radius)', 
                    padding: '15px', 
                    marginBottom: '15px' 
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <strong>{order.id}</strong>
                      <span style={{ color: 'var(--gray)' }}>{order.date}</span>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <span className={`status ${order.status}`} style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {order.status === 'pending' ? 'Pendiente' : 
                         order.status === 'processing' ? 'En proceso' : 'Entregado'}
                      </span>
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: '600', color: 'var(--primary-color)' }}>
                      S/ {formatPrice(order.total)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </ClientView>
        
        {/* Account View */}
        <ClientView $active={activeView === 'account'}>
          <h2>Mi cuenta</h2>
          <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius)', padding: '20px', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '15px', color: 'var(--gray-dark)', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
              Información personal
            </h3>
            <div className="form-group">
              <label>Nombre completo:</label>
              <input type="text" value={user.name} readOnly />
            </div>
            <div className="form-group">
              <label>Correo electrónico:</label>
              <input type="email" value={user.email} readOnly />
            </div>
            <div className="form-group">
              <label>Teléfono:</label>
              <input type="tel" value={user.phone || ''} readOnly />
            </div>
            <div className="form-group">
              <label>Dirección:</label>
              <input type="text" value={user.address || ''} readOnly />
            </div>
          </div>
        </ClientView>
        
        {/* Checkout View */}
        <ClientView $active={activeView === 'checkout'}>
          <div style={{ marginBottom: '20px' }}>
            <button 
              className="btn btn-secondary"
              onClick={() => setActiveView('cart')}
              style={{ marginBottom: '20px' }}
            >
              <ArrowLeft size={16} />
              Volver al carrito
            </button>
          </div>
          
          <CheckoutForm>
            <h2 style={{ marginBottom: '30px', textAlign: 'center', color: 'var(--text-color)' }}>
              Finalizar pedido
            </h2>
            
            <OrderSummary>
              <h3>Resumen del pedido</h3>
              {cart.map((item, index) => (
                <CheckoutSummaryItem key={index}>
                  <div className="item-details">
                    <span className="quantity">{item.quantity}</span>
                    <span>{item.name}</span>
                  </div>
                  <span>S/ {formatPrice(item.total)}</span>
                </CheckoutSummaryItem>
              ))}
              <CheckoutSummaryItem>
                <span>Subtotal</span>
                <span>S/ {formatPrice(subtotal)}</span>
              </CheckoutSummaryItem>
              <CheckoutSummaryItem>
                <span>IGV (18%)</span>
                <span>S/ {formatPrice(tax)}</span>
              </CheckoutSummaryItem>
              <CheckoutSummaryItem>
                <span>Total</span>
                <span>S/ {formatPrice(total)}</span>
              </CheckoutSummaryItem>
            </OrderSummary>
            
            <form onSubmit={handleCheckoutSubmit}>
              <FormGroup>
                <label>
                  <User size={16} style={{ marginRight: '8px' }} />
                  Nombre completo *
                </label>
                <input 
                  type="text" 
                  value={checkoutData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Tu nombre completo"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  <Phone size={16} style={{ marginRight: '8px' }} />
                  Teléfono *
                </label>
                <input 
                  type="tel" 
                  value={checkoutData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="999 999 999"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  <MapPin size={16} style={{ marginRight: '8px' }} />
                  Dirección de entrega *
                </label>
                <input 
                  type="text" 
                  value={checkoutData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Calle, número, distrito"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label>Referencia (opcional)</label>
                <input 
                  type="text" 
                  value={checkoutData.reference}
                  onChange={(e) => handleInputChange('reference', e.target.value)}
                  placeholder="Casa azul, al frente del parque, etc."
                />
              </FormGroup>
              
              <FormGroup>
                <label>Método de pago</label>
                <PaymentMethods>
                  <PaymentMethod 
                    $active={checkoutData.paymentMethod === 'TRANSFER'}
                    onClick={() => handleInputChange('paymentMethod', 'TRANSFER')}
                  >
                    <CreditCard size={20} />
                    <span>Transferencia</span>
                  </PaymentMethod>
                  <PaymentMethod 
                    $active={checkoutData.paymentMethod === 'YAPE'}
                    onClick={() => handleInputChange('paymentMethod', 'YAPE')}
                  >
                    <Smartphone size={20} />
                    <span>Yape</span>
                  </PaymentMethod>
                  <PaymentMethod 
                    $active={checkoutData.paymentMethod === 'PLIN'}
                    onClick={() => handleInputChange('paymentMethod', 'PLIN')}
                  >
                    <Smartphone size={20} />
                    <span>Plin</span>
                  </PaymentMethod>
                  <PaymentMethod 
                    $active={checkoutData.paymentMethod === 'CASH'}
                    onClick={() => handleInputChange('paymentMethod', 'CASH')}
                  >
                    <DollarSign size={20} />
                    <span>Contraentrega</span>
                  </PaymentMethod>
                </PaymentMethods>
                {renderPaymentDetails()}
                
                {/* Subir comprobante de pago - aparece después de detalles de pago */}
                {renderVoucherUpload()}
              </FormGroup>
              
              <FormGroup>
                <label>Notas adicionales (opcional)</label>
                <textarea 
                  value={checkoutData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Instrucciones especiales para la entrega..."
                />
              </FormGroup>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '20px', padding: '15px' }}
              >
                <Truck size={16} />
                Confirmar pedido - S/ {formatPrice(total)}
              </button>
            </form>
          </CheckoutForm>
        </ClientView>
        
        {/* Order Confirmation View */}
        <ClientView $active={activeView === 'confirmation'}>
          <ConfirmationCard>
            <CheckCircle size={60} className="success-icon" />
            <h2>¡Pedido confirmado!</h2>
            <p>
              Tu pedido ha sido recibido y está siendo procesado. 
              Te contactaremos pronto para confirmar la entrega.
            </p>
            
            {confirmedOrder && (
              <>
                <div className="order-id">
                  Pedido #{confirmedOrder.id}
                </div>
                
                <div style={{ textAlign: 'left', marginBottom: '25px' }}>
                  <h3 style={{ marginBottom: '15px', color: 'var(--text-color)' }}>
                    Detalles del pedido:
                  </h3>
                  <p><strong>Cliente:</strong> {confirmedOrder.customer_name}</p>
                  <p><strong>Teléfono:</strong> {confirmedOrder.phone}</p>
                  <p><strong>Dirección:</strong> {confirmedOrder.address}</p>
                  <p><strong>Método de pago:</strong> {
                    confirmedOrder.payment_method === 'TRANSFER' ? 'Transferencia' :
                    confirmedOrder.payment_method === 'YAPE' ? 'Yape' :
                    confirmedOrder.payment_method === 'PLIN' ? 'Plin' :
                    'Contraentrega'
                  }</p>
                  <p><strong>Total:</strong> S/ {formatPrice(confirmedOrder.total)}</p>
                  {confirmedOrder.voucher && (
                    <p>
                      <strong>Comprobante:</strong>{' '}
                      <span style={{ 
                        color: 'var(--primary-color)', 
                        fontSize: '14px',
                        background: '#f8f9fa',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <Upload size={12} />
                        {confirmedOrder.voucher.name}
                      </span>
                    </p>
                  )}
                </div>
              </>
            )}
            
            <button 
              className="btn btn-primary"
              onClick={resetCheckout}
              style={{ marginRight: '10px' }}
            >
              <Home size={16} />
              Ir al inicio
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => setActiveView('orders')}
            >
              <ClipboardList size={16} />
              Ver mis pedidos
            </button>
          </ConfirmationCard>
        </ClientView>
      </ClientContent>

      <MobileNav>
        <NavItem 
          className={activeView === 'home' ? 'active' : ''}
          onClick={() => setActiveView('home')}
        >
          <Home size={20} />
          <span>Inicio</span>
        </NavItem>
        <NavItem onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Tags size={20} />
          <span>Categorías</span>
        </NavItem>
        <NavItem 
          className={activeView === 'cart' ? 'active' : ''}
          onClick={() => setActiveView('cart')}
        >
          <ShoppingCart size={20} />
          <span>Carrito</span>
        </NavItem>
        <NavItem 
          className={activeView === 'orders' ? 'active' : ''}
          onClick={() => setActiveView('orders')}
        >
          <ClipboardList size={20} />
          <span>Pedidos</span>
        </NavItem>
        <NavItem 
          className={activeView === 'account' ? 'active' : ''}
          onClick={() => setActiveView('account')}
        >
          <User size={20} />
          <span>Cuenta</span>
        </NavItem>
      </MobileNav>
    </ClientSection>
  )
}

export default ClientStore