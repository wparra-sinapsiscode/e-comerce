import { useState, useEffect, useCallback, memo } from 'react'
import styled from 'styled-components'
import { Home, Tags, Package, ClipboardList, CreditCard, LogOut, Search, Plus, Edit, Trash2, Eye, X, Save, Upload, Image as ImageIcon, Apple, Beef, Fish, Carrot, Milk, Wheat, Wine, ShoppingBasket, Coffee, Egg, Droplets, Zap, Flower2, Soup, Utensils, Check, XCircle, Clock, AlertCircle, ZoomIn, ArrowRight, Truck, Package2, Link, Camera, User, DollarSign } from 'lucide-react'

const AdminSection = styled.section`
  display: flex;
  height: 100vh;
`

const Sidebar = styled.nav`
  width: 250px;
  height: 100%;
  background-color: var(--gray-dark);
  color: white;
  padding: 20px 0;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  z-index: 100;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;
  
  svg {
    margin-right: 10px;
    color: var(--primary-color);
  }
  
  h2 {
    font-size: 20px;
    font-weight: 600;
  }
`

const NavLinks = styled.ul`
  list-style: none;
`

const NavItem = styled.li`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);
  
  svg {
    margin-right: 10px;
    font-size: 18px;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background-color: var(--primary-color);
  }
`

const Content = styled.main`
  flex: 1;
  margin-left: 250px;
  height: 100vh;
  overflow-y: auto;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 90;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--gray-lighter);
  border-radius: 30px;
  padding: 8px 15px;
  max-width: 400px;
  width: 100%;
  
  svg {
    color: var(--gray);
    margin-right: 10px;
  }
  
  input {
    background: transparent;
    border: none;
    flex: 1;
    font-size: 14px;
  }
`

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  span {
    margin-right: 10px;
    font-weight: 500;
  }
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

const TabContent = styled.div`
  padding: 30px;
  display: ${props => props.$active ? 'block' : 'none'};
  
  h2 {
    margin-bottom: 20px;
    color: var(--gray-dark);
  }
`

const TabHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const StatCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled.div`
  background-color: white;
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
`

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  
  svg {
    font-size: 24px;
    color: var(--primary-color);
  }
`

const StatInfo = styled.div`
  h3 {
    font-size: 14px;
    color: var(--gray);
    margin-bottom: 5px;
  }
  
  p {
    font-size: 24px;
    font-weight: 600;
    color: var(--gray-dark);
  }
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`

const CategoryCard = styled.div`
  background-color: white;
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const CategoryIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  background-color: ${props => props.color};
  
  svg {
    font-size: 30px;
    color: white;
  }
`

const CategoryActions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
`

const ActionBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  
  &.edit {
    background-color: var(--warning-color);
  }
  
  &.delete {
    background-color: var(--danger-color);
  }
  
  &.view {
    background-color: var(--secondary-color);
  }
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`

const ProductCard = styled.div`
  background-color: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`

const ProductImage = styled.div`
  height: 180px;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    
    &.loaded {
      opacity: 1;
    }
  }
  
  &:hover img.loaded {
    transform: scale(1.05);
  }
  
  .loading-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: #94a3b8;
    position: absolute;
    
    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid #e2e8f0;
      border-top: 2px solid #3b82f6;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const ProductBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${props => props.color};
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 20px;
`

const ProductContent = styled.div`
  padding: 15px;
  position: relative;
`

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--gray-dark);
`

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 10px;
  
  span {
    font-size: 13px;
    color: var(--gray);
    margin-left: 5px;
    font-weight: normal;
  }
`

const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  
  button {
    flex: 1;
    padding: 8px;
    font-size: 13px;
    
    &:first-child {
      margin-right: 5px;
    }
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    font-weight: 500;
    color: var(--gray);
    background-color: var(--gray-lighter);
  }
  
  tbody tr:hover {
    background-color: var(--gray-lighter);
  }
`

const Status = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  
  &.pending {
    background-color: #fff3cd;
    color: #856404;
  }
  
  &.processing {
    background-color: #cce5ff;
    color: #004085;
  }
  
  &.completed {
    background-color: #d4edda;
    color: #155724;
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const ModalContent = styled.div`
  background: white;
  border-radius: var(--radius);
  padding: 30px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 25px;
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-color);
    font-size: 14px;
  }
  
  input, select, textarea {
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

const ColorPicker = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
  margin-top: 10px;
`

const ColorOption = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid ${props => props.$selected ? 'var(--text-color)' : 'transparent'};
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.1);
  }
`

const IconPicker = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 10px;
`

const IconOption = styled.div`
  width: 70px;
  height: 80px;
  border: 2px solid ${props => props.$selected ? 'var(--primary-color)' : '#ddd'};
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  background: ${props => props.$selected ? 'rgba(233, 69, 96, 0.1)' : 'white'};
  position: relative;
  padding: 8px 4px;
  
  &:hover {
    border-color: var(--primary-color);
    background: rgba(233, 69, 96, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .icon-label {
    font-size: 9px;
    color: var(--gray);
    margin-top: 6px;
    text-align: center;
    line-height: 1.1;
    font-weight: 500;
    word-wrap: break-word;
    hyphens: auto;
    max-width: 100%;
  }
`

const ModalActions = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`

const PresentationSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  
  h4 {
    color: var(--gray-dark);
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 600;
  }
`

const PresentationForm = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 10px;
  align-items: end;
  margin-bottom: 20px;
  
  input, select {
    padding: 10px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }
  
  button {
    padding: 10px 15px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background: var(--primary-dark);
    }
    
    &:disabled {
      background: #94a3b8;
      cursor: not-allowed;
    }
  }
`

const PresentationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const PresentationItem = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 12px 15px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  
  .info {
    flex: 1;
    display: flex;
    gap: 15px;
    align-items: center;
    
    .name {
      font-weight: 500;
      color: var(--gray-dark);
    }
    
    .price {
      color: var(--primary-color);
      font-weight: 600;
    }
    
    .unit {
      color: var(--gray);
      font-size: 13px;
    }
  }
  
  .actions {
    display: flex;
    gap: 8px;
    
    button {
      padding: 6px 8px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &.delete {
        background: #fee2e2;
        color: #dc2626;
        
        &:hover {
          background: #fecaca;
        }
      }
    }
  }
`

const PaymentModal = styled.div`
  background: white;
  border-radius: 16px;
  padding: 0;
  max-width: 700px;
  width: 95%;
  max-height: 95vh;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  animation: modalSlideIn 0.3s ease-out;
  
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`

const PaymentModalHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 24px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .close-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: scale(1.1);
    }
  }
`

const PaymentModalBody = styled.div`
  padding: 30px;
  max-height: calc(95vh - 140px);
  overflow-y: auto;
`

const PaymentDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`

const DetailCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #d1d5db;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
  
  .detail-label {
    font-size: 12px;
    font-weight: 600;
    color: #6b7280;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }
  
  .detail-value {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    word-break: break-word;
  }
  
  &.amount-card {
    grid-column: 1 / -1;
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    border: 2px solid #d1d5db;
    
    .detail-value {
      font-size: 24px;
      color: #059669;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  
  &.status-card {
    .detail-value {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`

const CustomerInfo = styled.div`
  background: #f9fafb;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;
  border-left: 4px solid #667eea;
  
  h3 {
    margin: 0 0 16px 0;
    color: #111827;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .customer-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }
  
  .customer-field {
    .field-label {
      font-size: 12px;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    
    .field-value {
      font-size: 14px;
      color: #374151;
      font-weight: 500;
    }
  }
`

const VoucherSection = styled.div`
  margin: 30px 0;
  
  .voucher-title {
    margin-bottom: 20px;
    color: #111827;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .voucher-container {
    background: #f9fafb;
    border-radius: 16px;
    padding: 24px;
    border: 2px solid #e5e7eb;
    transition: all 0.3s ease;
    
    &.has-voucher {
      border-color: #10b981;
      background: #ecfdf5;
    }
    
    &.cash-payment {
      border-color: #f59e0b;
      background: #fffbeb;
    }
  }
  
  .voucher-image {
    max-width: 100%;
    max-height: 400px;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 3px solid white;
    
    &:hover {
      transform: scale(1.05) rotate(1deg);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }
  }
  
  .no-voucher {
    text-align: center;
    padding: 60px 40px;
    
    .cash-icon {
      margin-bottom: 20px;
      padding: 20px;
      background: #fbbf24;
      color: white;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    
    .cash-title {
      font-size: 20px;
      font-weight: 700;
      color: #92400e;
      margin-bottom: 8px;
    }
    
    .cash-subtitle {
      font-size: 16px;
      color: #78350f;
      margin-bottom: 16px;
    }
    
    .cash-note {
      font-size: 14px;
      color: #a16207;
      background: rgba(251, 191, 36, 0.1);
      padding: 12px 20px;
      border-radius: 8px;
      display: inline-block;
    }
  }
`

const StatusActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #e5e7eb;
  
  .action-btn {
    padding: 16px 32px;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 160px;
    justify-content: center;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.5s;
    }
    
    &:hover::before {
      left: 100%;
    }
    
    &.approve {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
      
      &:hover {
        background: linear-gradient(135deg, #059669 0%, #047857 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
      }
      
      &:active {
        transform: translateY(0px);
      }
    }

    &.verify {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
      
      &:hover {
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
      }
      
      &:active {
        transform: translateY(0px);
      }
    }

    &.confirm {
      background: linear-gradient(135deg, #059669 0%, #047857 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(5, 150, 105, 0.3);
      border: 2px solid #34d399;
      
      &:hover {
        background: linear-gradient(135deg, #047857 0%, #065f46 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(5, 150, 105, 0.4);
        border-color: #10b981;
      }
      
      &:active {
        transform: translateY(0px);
      }
    }
    
    &.reject {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
      
      &:hover {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
      }
      
      &:active {
        transform: translateY(0px);
      }
    }
    
    &.close {
      background: #f3f4f6;
      color: #374151;
      border: 2px solid #d1d5db;
      
      &:hover {
        background: #e5e7eb;
        border-color: #9ca3af;
        transform: translateY(-1px);
      }
    }
  }
`

const PaymentMethodBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  
  &.transfer {
    background: #dbeafe;
    color: #1e40af;
  }
  
  &.yape {
    background: #fef3c7;
    color: #92400e;
  }
  
  &.plin {
    background: #e0e7ff;
    color: #3730a3;
  }
  
  &.cash {
    background: #fef3c7;
    color: #92400e;
  }
`

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &.verified {
    background: #d1fae5;
    color: #065f46;
  }
  
  &.pending {
    background: #fef3c7;
    color: #92400e;
  }
  
  &.rejected {
    background: #fee2e2;
    color: #991b1b;
  }
`

const WorkflowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
`

const WorkflowStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 15px;
    right: -20px;
    width: 32px;
    height: 2px;
    background: ${props => props.$isCompleted ? '#10b981' : '#e2e8f0'};
    z-index: 1;
  }
`

const StepIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => 
    props.$isActive ? props.$color :
    props.$isCompleted ? '#10b981' : '#e2e8f0'
  };
  color: white;
  font-size: 14px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  cursor: ${props => props.$canAdvance ? 'pointer' : 'default'};
  border: 2px solid ${props => 
    props.$isActive ? props.$color :
    props.$isCompleted ? '#10b981' : '#e2e8f0'
  };
  
  &:hover {
    ${props => props.$canAdvance && `
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    `}
  }
`

const StepLabel = styled.div`
  font-size: 11px;
  text-align: center;
  color: ${props => 
    props.$isActive ? props.$color :
    props.$isCompleted ? '#10b981' : '#6b7280'
  };
  font-weight: ${props => props.$isActive || props.$isCompleted ? '600' : '400'};
  max-width: 80px;
  line-height: 1.2;
`

const WorkflowControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-left: auto;
`

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`

const ImageOptionTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
`

const ImageOptionTab = styled.button`
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  background: ${props => props.$active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.$active ? 'white' : '#64748b'};
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$active ? 'var(--primary-color)' : '#f1f5f9'};
  }
`

const FileUploadArea = styled.div`
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  background: #f8fafc;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    background: #f0f9ff;
  }

  &.dragover {
    border-color: var(--primary-color);
    background: #f0f9ff;
  }

  input[type="file"] {
    display: none;
  }
`

const ImagePreview = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
  }
`

const ImageInfo = styled.div`
  flex: 1;
  
  .filename {
    font-weight: 500;
    color: #374151;
    margin-bottom: 4px;
  }
  
  .filesize {
    font-size: 12px;
    color: #6b7280;
  }
`

const RemoveImageButton = styled.button`
  padding: 6px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    background: #dc2626;
  }
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  padding: 20px;
`

const PaginationButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  background: ${props => props.$active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.$active ? 'white' : '#374151'};
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${props => props.$active ? 'var(--primary-color)' : '#f1f5f9'};
    border-color: var(--primary-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const PaginationInfo = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin: 0 15px;
`

import { orderStatuses } from '../data/sampleData'

// Optimized Product Image Component
const OptimizedProductImage = memo(({ src, alt, onLoad, onError }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [imgSrc, setImgSrc] = useState('')

  useEffect(() => {
    if (!src) return
    
    setIsLoading(true)
    setHasError(false)
    
    // Lazy load the image
    const img = new Image()
    img.onload = () => {
      setImgSrc(src)
      setIsLoading(false)
      onLoad && onLoad()
    }
    img.onerror = () => {
      setHasError(true)
      setIsLoading(false)
      onError && onError()
    }
    img.src = src
  }, [src, onLoad, onError])

  return (
    <>
      {isLoading && (
        <div className="loading-placeholder">
          <div className="spinner"></div>
          <span>Cargando...</span>
        </div>
      )}
      {hasError && (
        <div className="loading-placeholder">
          <ImageIcon size={32} />
          <span>Error al cargar</span>
        </div>
      )}
      {imgSrc && !hasError && (
        <img 
          src={imgSrc} 
          alt={alt}
          className={isLoading ? '' : 'loaded'}
          loading="lazy"
        />
      )}
    </>
  )
})

function AdminDashboard({ 
  user, 
  logout, 
  categories, 
  products, 
  orders, 
  payments, 
  setCategories, 
  setProducts, 
  setOrders, 
  setPayments, 
  showToast,
  // API services
  categoryService,
  productService,
  orderService,
  paymentService,
  servicesInitialized
}) {
  // Ensure arrays are never undefined
  const safeCategories = categories || []
  const safeProducts = products || []
  const safeOrders = orders || []
  const safePayments = payments || []

  // ✅ ESTADOS - DECLARAR PRIMERO TODOS LOS useState
  const [activeTab, setActiveTab] = useState('dashboard')
  const [orderFilter, setOrderFilter] = useState('active') // 'pending_payment', 'active', 'delivered', 'all'
  const [isLoading, setIsLoading] = useState(false)
  
  // Modal states
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [showProductModal, setShowProductModal] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [paymentModalMode, setPaymentModalMode] = useState('verify') // 'verify' or 'view'
  
  // Form states
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    icon: 'Apple',
    color: '#e74c3c'
  })
  
  const [productForm, setProductForm] = useState({
    name: '',
    category_id: '',
    price: '',
    unit: '',
    description: '',
    image: '',
    presentations: []
  })
  
  // Image upload states
  const [imageInputType, setImageInputType] = useState('file') // Solo archivo, no URL
  const [uploadedFile, setUploadedFile] = useState(null)

  // ✅ VARIABLES CALCULADAS (necesarias para useEffect)
  const awaitingPaymentOrders = safeOrders.filter(order => order.status === 'awaiting_payment').length
  const deliveredOrders = safeOrders.filter(order => order.status === 'delivered').length
  const activeOrders = safeOrders.filter(order => !['delivered', 'cancelled'].includes(order.status)).length
  const pendingPayments = safePayments.filter(payment => payment.status === 'pending').length
  const totalProducts = safeProducts.length
  const totalIncome = safeOrders.filter(order => order.status === 'delivered').reduce((acc, curr) => acc + curr.total, 0)

  // 🚨 LOGS DE DEPURACIÓN PARA PAGOS PENDIENTES
  console.log('📊 ÓRDENES RECIBIDAS:', orders);
  console.log('📊 ÓRDENES ESPERANDO PAGO:', orders?.filter(o => o.status === 'awaiting_payment'));
  console.log('📊 PAGOS:', payments);
  console.log('📊 PAGOS PENDIENTES:', payments?.filter(p => p.status === 'pending'));
  console.log('📊 PAGOS PENDIENTES CON VOUCHER:', payments?.filter(p => p.status === 'pending' && p.voucher));
  console.log('📊 PAGOS PENDIENTES SIN VOUCHER:', payments?.filter(p => p.status === 'pending' && !p.voucher));

  // Debug logs para categorías y productos
  useEffect(() => {
    console.log('🎯 ADMIN DASHBOARD - Props recibidas:', {
      categories,
      products,
      categoriesType: typeof categories,
      productsType: typeof products,
      isArrayCategories: Array.isArray(categories),
      isArrayProducts: Array.isArray(products),
      categoriesLength: categories?.length,
      productsLength: products?.length,
      firstCategory: categories?.[0],
      firstProduct: products?.[0]
    })
  }, [categories, products])

  // Auto-cambiar al filtro de pagos pendientes si hay pagos pendientes y se abre la tab de órdenes
  useEffect(() => {
    if (activeTab === 'orders' && pendingPayments > 0 && orderFilter === 'active') {
      setOrderFilter('pending_payment')
    }
  }, [activeTab, pendingPayments, orderFilter])

  // 🔥 CARGAR PAGOS PARA ÓRDENES ESPERANDO PAGO
  useEffect(() => {
    const loadPaymentsForAwaitingOrders = async () => {
      if (!orders || orders.length === 0 || !paymentService) return
      
      console.log('🔄 CARGANDO PAGOS para órdenes esperando pago...')
      const awaitingOrders = orders.filter(o => o.status === 'awaiting_payment')
      console.log('📋 Órdenes esperando pago encontradas:', awaitingOrders.length)
      
      const newPayments = []
      for (const order of awaitingOrders) {
        try {
          console.log(`🔍 Buscando pago para orden ${order.id}...`)
          const res = await paymentService.getByOrderId(order.id)
          if (res.success && res.data) {
            console.log(`✅ Pago encontrado para orden ${order.id}:`, res.data)
            newPayments.push(res.data)
          } else {
            console.log(`❌ No se encontró pago para orden ${order.id}`)
            // Crear pago temporal para órdenes sin pago registrado
            const tempPayment = {
              id: `temp-${order.id}`,
              order_id: order.id,
              customer_name: order.customer_name,
              customer_phone: order.customer_phone,
              amount: order.total,
              method: order.payment_method,
              status: 'pending',
              voucher: null,
              date: order.date,
              created_at: order.created_at
            }
            console.log(`🔧 Creando pago temporal para orden ${order.id}:`, tempPayment)
            newPayments.push(tempPayment)
          }
        } catch (error) {
          console.error(`❌ Error cargando pago para orden ${order.id}:`, error)
        }
      }
      
      if (newPayments.length > 0) {
        console.log('💾 Agregando pagos al estado:', newPayments)
        setPayments(prev => {
          // Evitar duplicados
          const existing = prev.filter(p => !newPayments.find(n => n.id === p.id))
          return [...existing, ...newPayments]
        })
      }
    }
    
    loadPaymentsForAwaitingOrders()
  }, [orders, paymentService])
  
  // Presentation management states
  const [showPresentations, setShowPresentations] = useState(false)
  const [currentPresentation, setCurrentPresentation] = useState({
    name: '',
    price: '',
    unit: ''
  })
  
  // Products pagination
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12 // Show 12 products per page

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'categories', label: 'Categorías', icon: Tags },
    { id: 'products', label: 'Productos', icon: Package },
    { id: 'orders', label: 'Pedidos', icon: ClipboardList },
    { id: 'payments', label: 'Historial', icon: CreditCard },
  ]

  const getStatusText = (status) => {
    return orderStatuses[status]?.label || status
  }

  const getStatusColor = (status) => {
    return orderStatuses[status]?.color || '#6b7280'
  }

  const getNextActions = (order) => {
    const currentStatus = order.status
    const payment = safePayments.find(p => p.order_id === order.id)
    
    switch (currentStatus) {
      case 'awaiting_payment':
        return payment?.status === 'pending' && payment?.voucher ? 
          [{ action: 'verify_payment', label: 'Verificar Pago', icon: Eye, color: '#3b82f6' }] : 
          []
      case 'preparing':
        return [{ action: 'mark_ready', label: 'Marcar Listo', icon: Package2, color: '#8b5cf6' }]
      case 'ready_for_shipping':
        return [{ action: 'mark_shipped', label: 'Marcar Enviado', icon: Truck, color: '#06b6d4' }]
      case 'shipped':
        return [{ action: 'mark_delivered', label: 'Marcar Entregado', icon: Check, color: '#10b981' }]
      default:
        return []
    }
  }

  const progressOrder = (orderId, newStatus) => {
    setOrders(safeOrders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
    
    const statusTexts = {
      preparing: 'alistado para preparación',
      ready_for_shipping: 'marcado como listo para envío',
      shipped: 'marcado como enviado',
      delivered: 'marcado como entregado'
    }
    
    showToast(`Pedido ${statusTexts[newStatus]}`, 'success')
  }

  const getWorkflowSteps = () => {
    return [
      { 
        key: 'awaiting_payment', 
        label: 'Esperando Pago', 
        icon: Clock, 
        color: '#f59e0b' 
      },
      { 
        key: 'preparing', 
        label: 'Preparando', 
        icon: Package, 
        color: '#3b82f6' 
      },
      { 
        key: 'ready_for_shipping', 
        label: 'Listo para Envío', 
        icon: Package2, 
        color: '#8b5cf6' 
      },
      { 
        key: 'shipped', 
        label: 'Enviado', 
        icon: Truck, 
        color: '#06b6d4' 
      },
      { 
        key: 'delivered', 
        label: 'Entregado', 
        icon: Check, 
        color: '#10b981' 
      }
    ]
  }

  const getStatusIndex = (status) => {
    const steps = getWorkflowSteps()
    return steps.findIndex(step => step.key === status)
  }

  const canAdvanceToStep = (order, targetStepIndex) => {
    const currentIndex = getStatusIndex(order.status)
    const payment = safePayments.find(p => p.order_id === order.id)
    
    // Can only advance one step at a time
    if (targetStepIndex !== currentIndex + 1) return false
    
    // Special rule: can't advance from awaiting_payment without verified payment
    if (order.status === 'awaiting_payment' && (!payment || payment.status !== 'verified')) {
      return false
    }
    
    return true
  }

  const renderWorkflowVisualizer = (order) => {
    const steps = getWorkflowSteps()
    const currentIndex = getStatusIndex(order.status)
    const payment = safePayments.find(p => p.order_id === order.id)
    
    return (
      <WorkflowContainer>
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex
          const isActive = index === currentIndex
          const canAdvance = index === currentIndex + 1 && canAdvanceToStep(order, index)
          const canVerifyPayment = order.status === 'awaiting_payment' && step.key === 'awaiting_payment' && payment && payment.status === 'pending'
          const IconComponent = step.icon
          
          return (
            <WorkflowStep key={step.key} $isCompleted={isCompleted}>
              <StepIcon
                $isActive={isActive}
                $isCompleted={isCompleted}
                $canAdvance={canAdvance || canVerifyPayment}
                $color={step.color}
                onClick={() => {
                  if (canVerifyPayment) {
                    handleOpenPaymentModal(order)
                  } else if (canAdvance) {
                    progressOrder(order.id, step.key)
                  }
                }}
              >
                {isCompleted ? <Check size={16} /> : <IconComponent size={16} />}
              </StepIcon>
              <StepLabel
                $isActive={isActive}
                $isCompleted={isCompleted}
                $color={step.color}
              >
                {step.label}
              </StepLabel>
            </WorkflowStep>
          )
        })}
        
        <WorkflowControls>
          {order.status === 'awaiting_payment' && payment && payment.status === 'pending' && (
            <div style={{ 
              background: payment.voucher ? '#fee2e2' : '#fef3c7', 
              color: payment.voucher ? '#dc2626' : '#92400e', 
              padding: '6px 12px', 
              borderRadius: '6px', 
              fontSize: '12px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <AlertCircle size={14} />
              {payment.voucher ? 'Click para verificar pago' : 'Click para verificar pago en efectivo'}
            </div>
          )}
          {order.status === 'cancelled' && (
            <Status style={{ background: '#ef4444', color: 'white', fontSize: '12px' }}>
              Cancelado
            </Status>
          )}
        </WorkflowControls>
      </WorkflowContainer>
    )
  }

  const getPaymentMethodText = (method) => {
    switch (method) {
      case 'transfer': return 'Transferencia bancaria'
      case 'yape': return 'Yape'
      case 'plin': return 'Plin'
      case 'cod': return 'Pago contra entrega'
      default: return method
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', options)
  }

  const deleteCategory = async (categoryId) => {
    if (window.confirm('¿Estás seguro de eliminar esta categoría?')) {
      try {
        setIsLoading(true)
        const response = await categoryService.delete(categoryId)
        
        if (response.success) {
          setCategories(safeCategories.filter(cat => cat.id !== categoryId))
          showToast('Categoría eliminada correctamente', 'success')
        } else {
          showToast(response.message || 'Error al eliminar la categoría', 'error')
        }
      } catch (error) {
        console.error('Delete category error:', error)
        showToast('Error al eliminar la categoría', 'error')
      } finally {
        setIsLoading(false)
      }
    }
  }

  const deleteProduct = async (productId) => {
    console.log('🗑️ DELETE PRODUCT - ID:', productId)
    console.log('🗑️ DELETE PRODUCT - Type:', typeof productId)
    
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        setIsLoading(true)
        console.log('🗑️ Llamando a productService.delete con ID:', productId)
        const response = await productService.delete(productId)
        console.log('🗑️ DELETE RESPONSE:', response)
        
        if (response.success) {
          console.log('✅ Product deleted successfully')
          // USAR CALLBACK PARA OBTENER ESTADO ACTUAL
          setProducts(currentProducts => {
            const filteredProducts = currentProducts.filter(prod => prod.id !== productId)
            console.log('🗑️ PRODUCTOS ANTES DEL FILTRO:', currentProducts.length)
            console.log('🗑️ PRODUCTOS DESPUÉS DEL FILTRO:', filteredProducts.length)
            return filteredProducts
          })
          showToast('Producto eliminado correctamente', 'success')
        } else {
          console.log('❌ Delete failed:', response.error || response.message)
          showToast(response.message || 'Error al eliminar el producto', 'error')
        }
      } catch (error) {
        console.error('❌ Delete error:', error)
        showToast('Error al eliminar el producto', 'error')
      } finally {
        setIsLoading(false)
      }
    }
  }

  // Modal handlers
  const openCategoryModal = () => {
    setCategoryForm({
      name: '',
      icon: 'Apple',
      color: '#e74c3c'
    })
    setShowCategoryModal(true)
  }

  const closeCategoryModal = () => {
    setShowCategoryModal(false)
    setEditingCategory(null)
    setCategoryForm({
      name: '',
      icon: 'Apple',
      color: '#e74c3c'
    })
  }

  const openProductModal = () => {
    console.log('🚀 PRODUCTO: Abriendo modal de nuevo producto')
    console.log('🚀 PRODUCTO: Categorías disponibles:', safeCategories.length)
    
    const initialForm = {
      name: '',
      category_id: safeCategories.length > 0 ? safeCategories[0].id.toString() : '',
      price: '',
      unit: '',
      description: '',
      image: '',
      presentations: []
    }
    
    console.log('🚀 PRODUCTO: Formulario inicial:', initialForm)
    
    setProductForm(initialForm)
    setShowPresentations(false)
    setCurrentPresentation({ name: '', price: '', unit: '' })
    setShowProductModal(true)
    
    console.log('✅ PRODUCTO: Modal abierto exitosamente')
  }

  const closeProductModal = () => {
    setShowProductModal(false)
    setEditingProduct(null)
    setProductForm({
      name: '',
      category_id: '',
      price: '',
      unit: '',
      description: '',
      image: '',
      presentations: []
    })
    setShowPresentations(false)
    setCurrentPresentation({ name: '', price: '', unit: '' })
    setImageInputType('url')
    setUploadedFile(null)
  }

  // Image handling functions
  const handleFileUpload = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const dataUrl = e.target.result
        setUploadedFile({
          file: file,
          dataUrl: dataUrl,
          name: file.name,
          size: file.size
        })
        setProductForm({ ...productForm, image: dataUrl })
      }
      reader.readAsDataURL(file)
    } else {
      showToast('Por favor selecciona un archivo de imagen válido', 'error')
    }
  }

  const handleImageInputTypeChange = (type) => {
    setImageInputType(type)
    if (type === 'url') {
      setUploadedFile(null)
      setProductForm({ ...productForm, image: '' })
    } else {
      setProductForm({ ...productForm, image: '' })
    }
  }

  const removeUploadedImage = () => {
    setUploadedFile(null)
    setProductForm({ ...productForm, image: '' })
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // Presentation management functions
  const addPresentation = () => {
    if (currentPresentation.name && currentPresentation.price && currentPresentation.unit) {
      const newPresentation = {
        id: Date.now(),
        ...currentPresentation,
        price: parseFloat(currentPresentation.price)
      }
      setProductForm(prev => ({
        ...prev,
        presentations: [...prev.presentations, newPresentation]
      }))
      setCurrentPresentation({ name: '', price: '', unit: '' })
    }
  }

  const removePresentation = (presentationId) => {
    setProductForm(prev => ({
      ...prev,
      presentations: prev.presentations.filter(p => p.id !== presentationId)
    }))
  }

  const handleUnitChange = (unit) => {
    console.log('🔍 UNIT CHANGE - VALUE:', unit)
    console.log('🔍 UNIT CHANGE - TYPE:', typeof unit)
    console.log('🔍 UNIT CHANGE - CHAR CODE:', unit ? unit.charCodeAt(0) : 'undefined')
    console.log('📝 PRODUCTO: Cambiando unidad a:', unit)
    console.log('📝 PRODUCTO: ¿Es presentación?', unit === 'PRESENTATION')
    
    setProductForm(prev => ({ ...prev, unit }))
    setShowPresentations(unit === 'PRESENTATION')
    if (unit !== 'PRESENTATION') {
      console.log('📝 PRODUCTO: Limpiando presentaciones (no es tipo presentación)')
      setProductForm(prev => ({ ...prev, presentations: [] }))
    } else {
      console.log('📝 PRODUCTO: Habilitando sección de presentaciones')
    }
    
    console.log('📝 PRODUCTO: Formulario actualizado con unidad:', unit)
  }

  // Edit modal handlers
  const openEditCategoryModal = (category) => {
    setEditingCategory(category)
    setCategoryForm({
      name: category.name,
      icon: category.icon || 'Package',
      color: category.color || '#4A90E2'
    })
    setShowCategoryModal(true)
  }

  const openEditProductModal = (product) => {
    setEditingProduct(product)
    setProductForm({
      name: product.name,
      category_id: product.category_id.toString(),
      price: product.price.toString(),
      unit: product.unit,
      description: product.description || '',
      image: product.image || '',
      presentations: product.presentations || []
    })
    setShowPresentations(product.unit === 'presentation')
    setCurrentPresentation({ name: '', price: '', unit: '' })
    // Reset image states when editing
    setImageInputType('url')
    setUploadedFile(null)
    setShowProductModal(true)
  }

  // Form submission handlers
  const handleCategorySubmit = async (e) => {
    e.preventDefault()
    
    console.log('🏷️ CATEGORY SUBMIT: Formulario enviado')
    console.log('🏷️ CATEGORY SUBMIT: categoryForm completo:', categoryForm)
    
    if (!categoryForm.name.trim()) {
      console.log('❌ CATEGORY SUBMIT: Nombre vacío')
      showToast('El nombre de la categoría es obligatorio', 'error')
      return
    }

    try {
      setIsLoading(true)
      
      const categoryData = {
        name: categoryForm.name.trim(),
        icon: categoryForm.icon,
        color: categoryForm.color
      }
      
      console.log('🏷️ CATEGORY SUBMIT: Datos a enviar:', categoryData)
      console.log('🏷️ CATEGORY SUBMIT: Tipo de icono:', typeof categoryData.icon)
      console.log('🏷️ CATEGORY SUBMIT: Icono seleccionado:', categoryData.icon)
      
      // Verificar que el icono esté en la lista de disponibles
      const iconExists = availableIcons.find(icon => icon.name === categoryData.icon)
      console.log('🏷️ CATEGORY SUBMIT: ¿Icono existe en lista?', !!iconExists)
      if (iconExists) {
        console.log('🏷️ CATEGORY SUBMIT: Icono encontrado:', iconExists)
      }

      if (editingCategory) {
        // Update existing category
        const response = await categoryService.update(editingCategory.id, categoryData)
        
        if (response.success) {
          // La categoría actualizada está directamente en response.data
          const updatedCategories = safeCategories.map(cat => 
            cat.id === editingCategory.id ? response.data : cat
          )
          setCategories(updatedCategories)
          showToast('Categoría actualizada correctamente', 'success')
          closeCategoryModal()
        } else {
          showToast(response.message || 'Error al actualizar la categoría', 'error')
        }
      } else {
        // Create new category
        console.log('🏷️ CATEGORY SUBMIT: Llamando a categoryService.create...')
        const response = await categoryService.create(categoryData)
        
        console.log('🏷️ CATEGORY SUBMIT: Respuesta del backend:', response)
        console.log('🏷️ CATEGORY SUBMIT: Success:', response.success)
        
        // DIAGNÓSTICO: Estructura completa de la respuesta
        console.log('🔍 ESTRUCTURA RESPUESTA:', {
          fullResponse: response,
          data: response.data,
          dataData: response.data?.data,
          success: response.success
        })
        
        if (response.success) {
          console.log('✅ CATEGORY SUBMIT: Categoría creada exitosamente')
          console.log('🏷️ CATEGORY SUBMIT: Nueva categoría (data.category):', response.data.category)
          console.log('🏷️ CATEGORY SUBMIT: Nueva categoría (data.data):', response.data?.data)
          console.log('🏷️ CATEGORY SUBMIT: Nueva categoría (data directamente):', response.data)
          
          // La categoría está directamente en response.data, no en response.data.category
          const newCategory = response.data
          console.log('🏷️ CATEGORY SUBMIT: Categoría procesada:', newCategory)
          
          setCategories([...safeCategories, newCategory])
          showToast('Categoría creada correctamente', 'success')
          closeCategoryModal()
        } else {
          console.log('❌ CATEGORY SUBMIT: Error del backend:', response.error)
          console.log('❌ CATEGORY SUBMIT: Mensaje de error:', response.message)
          showToast(response.message || 'Error al crear la categoría', 'error')
        }
      }
    } catch (error) {
      console.error('Category submit error:', error)
      showToast('Error al procesar la categoría', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleProductSubmit = async (e) => {
    e.preventDefault()
    
    // LOGS DE DEBUGGING PARA RASTREAR EL PROBLEMA
    console.log('🔍 UNIT ORIGINAL:', productForm.unit)
    console.log('🔍 UNIT TYPE:', typeof productForm.unit)
    console.log('🔍 UNIT VALUE CODE:', productForm.unit ? productForm.unit.charCodeAt(0) : 'undefined')
    console.log('🔍 FORM COMPLETO:', productForm)
    
    if (!productForm.name.trim() || !productForm.category_id || !productForm.price || !productForm.unit) {
      showToast('Todos los campos obligatorios deben ser completados', 'error')
      return
    }

    // Validate presentations if unit is 'PRESENTATION'
    if (productForm.unit === 'PRESENTATION') {
      if (productForm.presentations.length === 0) {
        showToast('Debes agregar al menos una presentación para productos envasados', 'error')
        return
      }
    }

    const price = parseFloat(productForm.price)
    if (isNaN(price) || price <= 0) {
      showToast('El precio debe ser un número válido mayor a 0', 'error')
      return
    }

    setIsLoading(true)

    try {
      if (editingProduct) {
        // Update existing product
        console.log('🔄 UPDATING PRODUCT:', editingProduct.id)
        const updateData = {
          name: productForm.name.trim(),
          category_id: parseInt(productForm.category_id),
          price: price,
          unit: productForm.unit.toLowerCase(), // FRONTEND SE ADAPTA AL BACKEND
          description: productForm.description.trim(),
          image: productForm.image.trim() || editingProduct.image,
          presentations: productForm.unit === 'presentation' ? productForm.presentations : undefined
        }
        
        console.log('🔍 UPDATE DATA TO SEND:', updateData)
        console.log('🔍 UPDATE UNIT TO SEND:', updateData.unit)
        
        const response = await productService.updateProduct(editingProduct.id, updateData)
        
        if (response.success) {
          const updatedProducts = safeProducts.map(prod => 
            prod.id === editingProduct.id ? response.data : prod
          )
          setProducts(updatedProducts)
          showToast('Producto actualizado correctamente', 'success')
        } else {
          showToast(response.error?.message || 'Error al actualizar producto', 'error')
        }
      } else {
        // Create new product
        console.log('➕ CREATING PRODUCT')
        
        // CONVERSIÓN FORZADA A MINÚSCULAS
        const productData = {
          name: productForm.name.trim(),
          category_id: parseInt(productForm.category_id),
          price: price,
          unit: productForm.unit.toLowerCase(), // FRONTEND SE ADAPTA AL BACKEND
          description: productForm.description.trim(),
          active: true
        }
        
        console.log('🔍 DATA TO SEND:', productData)
        console.log('🔍 UNIT TO SEND:', productData.unit)
        
        // Only add image if it's not empty
        if (productForm.image.trim()) {
          productData.image = productForm.image.trim()
        }
        
        // NO agregar presentations al producto principal
        // Las presentaciones se manejan por separado después de crear el producto
        // if (productForm.unit === 'presentation') {
        //   productData.presentations = productForm.presentations
        // }
        
        console.log('📦 DATOS DEL PRODUCTO A CREAR:', {
          name: productData.name,
          category_id: productData.category_id,
          price: productData.price,
          unit: productData.unit,
          description: productData.description,
          image: productData.image,
          active: productData.active,
          presentations: productData.presentations
        })
        console.log('✅ VALIDANDO DATOS ANTES DE ENVIAR:', {
          category_id_existe: productData.category_id !== undefined,
          category_id_valor: productData.category_id,
          unit_valor: productData.unit,
          price_es_numero: typeof productData.price === 'number',
          name_existe: productData.name !== undefined
        })
        
        console.log('🚀 CREAR PRODUCTO - Iniciando...')
        const response = await productService.createProduct(productData)
        console.log('📦 CREAR PRODUCTO - Respuesta:', response)
        
        if (response.success) {
          console.log('📦 RESPUESTA COMPLETA:', response)
          console.log('📦 DATA:', response.data)
          console.log('📦 ESTRUCTURA:', Object.keys(response.data))
          
          console.log('🔍 ESTRUCTURA RESPONSE:', {
            responseKeys: Object.keys(response),
            dataKeys: Object.keys(response.data || {}),
            productId: response.data?.data?.id || response.data?.product?.id || response.data?.id || 'NO ID!'
          })
          
          // Extraer el producto correctamente - ESTRUCTURA DOBLEMENTE ANIDADA
          const newProduct = response.data?.data || response.data?.product || response.data
          console.log('🔍 PRODUCTO EXTRAÍDO CORRECTAMENTE:', newProduct)
          console.log('🔍 ID DEL PRODUCTO:', newProduct?.id)
          console.log('✅ PRODUCTO CREADO - ID:', newProduct?.id)
          console.log('📋 PRODUCTOS ANTES (safeProducts):', safeProducts.length)
          
          // VALIDACIÓN: Asegurar que el producto tenga ID válido
          if (!newProduct || !newProduct.id) {
            console.error('❌ ERROR: Producto sin ID válido:', newProduct)
            showToast('Error: El producto se creó pero no se recibió ID válido', 'error')
            return
          }
          
          // ACTUALIZAR EL ESTADO GLOBAL DEL PADRE (App.jsx)
          console.log('🔄 ACTUALIZANDO ESTADO GLOBAL DEL PADRE...')
          setProducts(currentProducts => {
            const updatedProducts = [...currentProducts, newProduct]
            console.log('📋 PRODUCTOS ANTES DEL CALLBACK:', currentProducts.length)
            console.log('📋 PRODUCTOS DESPUÉS DEL CALLBACK:', updatedProducts.length)
            console.log('🔄 ¿Se actualizó la lista?', updatedProducts.includes(newProduct))
            console.log('🔄 NUEVO PRODUCTO TIENE ID?', newProduct?.id)
            console.log('🔄 ÚLTIMO PRODUCTO EN LISTA:', updatedProducts[updatedProducts.length - 1])
            console.log('🔄 IDS DE TODOS LOS PRODUCTOS:', updatedProducts.map(p => p.id))
            return updatedProducts
          })
          
          // Go to last page to see the new product
          const newTotalPages = Math.ceil((safeProducts.length + 1) / productsPerPage)
          setCurrentPage(newTotalPages)
          showToast('Producto creado correctamente', 'success')
        } else {
          console.error('❌ Error creating product:', response.error)
          console.error('❌ Errores de validación detallados:', response.error?.errors)
          if (response.error?.errors) {
            response.error.errors.forEach((err, index) => {
              console.error(`Error ${index + 1}:`, err)
            })
          }
          showToast(response.error?.message || 'Error al crear producto', 'error')
        }
      }
      
      console.log('🔄 CERRANDO MODAL DE PRODUCTO')
      closeProductModal()
    } catch (error) {
      console.error('❌ Exception in handleProductSubmit:', error)
      showToast('Error al procesar producto', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const getPaymentMethodIcon = (method) => {
    switch(method) {
      case 'TRANSFER': return '🏦'
      case 'YAPE': return '📱'
      case 'PLIN': return '💳'
      case 'CASH': return '💵'
      default: return '💰'
    }
  }

  // Get order data for payment modal
  const getOrderForPayment = (payment) => {
    return safeOrders.find(order => order.id === payment.order_id)
  }

  // Payment management functions
  const openPaymentModal = (payment, mode = 'verify') => {
    console.log('🔔 MODAL ABIERTO - Payment:', payment, 'Mode:', mode)
    setSelectedPayment(payment)
    setPaymentModalMode(mode)
    setShowPaymentModal(true)
  }

  // 🔥 NUEVA FUNCIÓN para abrir modal desde orden
  const handleOpenPaymentModal = (order) => {
    console.log('🔔 ABRIR MODAL DESDE ORDEN:', order)
    
    // Buscar pago existente o crear temporal
    let payment = safePayments.find(p => p.order_id === order.id)
    
    if (!payment) {
      console.log('🔧 Creando pago temporal para orden sin pago registrado')
      payment = {
        id: `temp-${order.id}`,
        order_id: order.id,
        customer_name: order.customer_name || order.customer,
        customer_phone: order.customer_phone,
        amount: order.total,
        method: order.payment_method,
        status: 'pending',
        voucher: null,
        date: order.date,
        created_at: order.created_at
      }
      
      // Agregar el pago temporal al estado
      setPayments(prev => [...prev, payment])
    }
    
    console.log('💳 Abriendo modal con pago:', payment)
    console.log('📦 Orden seleccionada con productos:', order)
    console.log('🛒 Items en la orden:', order.items?.length || 0)
    setSelectedOrder(order)
    setSelectedPayment(payment)
    setPaymentModalMode('verify')
    setShowPaymentModal(true)
  }

  const closePaymentModal = () => {
    setSelectedPayment(null)
    setSelectedOrder(null)
    setShowPaymentModal(false)
  }

  const verifyPayment = async (paymentId) => {
    try {
      setIsLoading(true)
      
      // Call the API to verify payment (first step of double confirmation)
      const response = await paymentService.verifyPayment(paymentId, 'VERIFIED', 'Pago verificado - pendiente de confirmación final')
      
      if (response.success) {
        // Update local state to reflect the verification
        const updatedPayments = safePayments.map(payment => 
          payment.id === paymentId 
            ? { ...payment, status: 'verified' }
            : payment
        )
        setPayments(updatedPayments)
        
        // Find and update corresponding order payment status (but keep order status as awaiting_payment)
        const payment = safePayments.find(p => p.id === paymentId)
        if (payment) {
          const updatedOrders = safeOrders.map(order => 
            order.id === payment.order_id
              ? { ...order, payment_status: 'verified' }
              : order
          )
          setOrders(updatedOrders)
        }
        
        showToast('Pago verificado - Listo para confirmar inicio de preparación', 'success')
        // Modal stays open for final confirmation
      } else {
        showToast(response.error?.message || 'Error al verificar el pago', 'error')
      }
    } catch (error) {
      console.error('Error verifying payment:', error)
      showToast('Error al verificar el pago', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const confirmPaymentPreparation = async (paymentId) => {
    try {
      setIsLoading(true)
      
      // Call the API to confirm payment and start order preparation (second step of double confirmation)
      const response = await paymentService.confirmPayment(paymentId, 'Pago confirmado - pedido iniciado en preparación')
      
      if (response.success) {
        // Update local state to reflect the order status change
        const payment = safePayments.find(p => p.id === paymentId)
        if (payment) {
          const updatedOrders = safeOrders.map(order => 
            order.id === payment.order_id && order.status === 'awaiting_payment'
              ? { ...order, status: 'preparing' }
              : order
          )
          setOrders(updatedOrders)
        }
        
        showToast('Pago confirmado - Pedido iniciado en preparación', 'success')
        closePaymentModal()
      } else {
        showToast(response.error?.message || 'Error al confirmar el pago', 'error')
      }
    } catch (error) {
      console.error('Error confirming payment:', error)
      showToast('Error al confirmar el pago', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  // Legacy function for backwards compatibility (now just calls verifyPayment)
  const approvePayment = (paymentId) => {
    verifyPayment(paymentId)
  }

  const rejectPayment = (paymentId) => {
    // Update payment status
    const updatedPayments = safePayments.map(payment => 
      payment.id === paymentId 
        ? { ...payment, status: 'rejected' }
        : payment
    )
    setPayments(updatedPayments)
    
    // Find and update corresponding order status
    const payment = safePayments.find(p => p.id === paymentId)
    if (payment) {
      const updatedOrders = safeOrders.map(order => 
        order.id === payment.order_id
          ? { ...order, status: 'cancelled', payment_status: 'rejected' }
          : order
      )
      setOrders(updatedOrders)
    }
    
    showToast('Pago rechazado - Pedido cancelado', 'error')
    closePaymentModal()
  }

  // Price formatting utility
  const formatPrice = (price) => {
    const numPrice = parseFloat(price)
    return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2)
  }

  // Icon mapping function
  const getIconComponent = (iconName) => {
    const iconMap = {
      'Apple': Apple,
      'Carrot': Carrot,
      'Beef': Beef,
      'Fish': Fish,
      'Milk': Milk,
      'Wheat': Wheat,
      'Wine': Wine,
      'ShoppingBasket': ShoppingBasket,
      'Coffee': Coffee,
      'Egg': Egg,
      'Droplets': Droplets,
      'Zap': Zap,
      'Flower2': Flower2,
      'Soup': Soup,
      'Utensils': Utensils,
      'Package': Package,
      'Tags': Tags
    }
    return iconMap[iconName] || Package // Default to Package if icon not found
  }

  // Available icons and colors for categories
  const availableIcons = [
    { name: 'Apple', component: Apple, label: 'Frutas Frescas' },
    { name: 'Carrot', component: Carrot, label: 'Verduras y Hortalizas' },
    { name: 'Beef', component: Beef, label: 'Carnes y Aves' },
    { name: 'Fish', component: Fish, label: 'Pescados y Mariscos' },
    { name: 'Milk', component: Milk, label: 'Productos Lácteos' },
    { name: 'Egg', component: Egg, label: 'Huevos y Derivados' },
    { name: 'Wheat', component: Wheat, label: 'Cereales y Granos' },
    { name: 'Coffee', component: Coffee, label: 'Café e Infusiones' },
    { name: 'Wine', component: Wine, label: 'Bebidas Alcohólicas' },
    { name: 'Droplets', component: Droplets, label: 'Bebidas y Jugos' },
    { name: 'ShoppingBasket', component: ShoppingBasket, label: 'Abarrotes y Conservas' },
    { name: 'Zap', component: Zap, label: 'Bebidas Energéticas' },
    { name: 'Flower2', component: Flower2, label: 'Hierbas y Condimentos' },
    { name: 'Soup', component: Soup, label: 'Comidas Preparadas' },
    { name: 'Utensils', component: Utensils, label: 'Platos Elaborados' },
    { name: 'Package', component: Package, label: 'Productos Generales' }
  ]
  
  // Log para debug: mostrar iconos disponibles
  console.log('🎨 ICONOS DISPONIBLES:', availableIcons.map(icon => icon.name))

  const availableColors = [
    '#e74c3c', // Rojo - Frutas/Carnes
    '#2ecc71', // Verde - Verduras
    '#f1c40f', // Amarillo - Lácteos/Granos
    '#e67e22', // Naranja - Panadería
    '#3498db', // Azul - Pescados/Bebidas
    '#d35400', // Naranja oscuro - Especias
    '#9b59b6', // Púrpura - Bebidas/Vinos
    '#34495e', // Gris - Abarrotes
    '#1abc9c', // Verde agua - Mariscos
    '#e91e63', // Rosa - Postres/Dulces
    '#ff9800', // Naranja claro - Frutas cítricas
    '#8bc34a', // Verde lima - Vegetales frescos
    '#795548', // Café - Café/Chocolate
    '#ff5722', // Rojo naranja - Picantes
    '#607d8b', // Azul gris - Congelados
    '#4caf50'  // Verde natural - Orgánicos
  ]

  const updateOrderStatus = (orderId, newStatus) => {
    const orderIndex = safeOrders.findIndex(order => order.id === orderId)
    if (orderIndex !== -1) {
      const updatedOrders = [...safeOrders]
      updatedOrders[orderIndex].status = newStatus
      setOrders(updatedOrders)
      showToast(`Pedido ${newStatus === 'processing' ? 'procesado' : 'completado'} correctamente`, 'success')
    }
  }

  const handleOrderAction = (orderId, action) => {
    const payment = safePayments.find(p => p.order_id === orderId)
    
    switch (action) {
      case 'verify_payment':
        if (payment) {
          openPaymentModal(payment)
        }
        break
      case 'mark_ready':
        progressOrder(orderId, 'ready_for_shipping')
        break
      case 'mark_shipped':
        progressOrder(orderId, 'shipped')
        break
      case 'mark_delivered':
        progressOrder(orderId, 'delivered')
        break
    }
  }

  const getOrderActions = (order) => {
    const actions = getNextActions(order)
    
    if (actions.length === 0) {
      const statusInfo = orderStatuses[order.status]
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#6b7280' }}>
          {statusInfo?.nextSteps.length > 0 ? (
            <span>{statusInfo.nextSteps[0]}</span>
          ) : (
            <Status style={{ background: statusInfo?.color || '#6b7280', color: 'white', fontSize: '12px' }}>
              {statusInfo?.label || order.status}
            </Status>
          )}
        </div>
      )
    }
    
    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {actions.map((actionItem, index) => {
          const IconComponent = actionItem.icon
          return (
            <button 
              key={index}
              className="btn"
              style={{ 
                backgroundColor: actionItem.color, 
                color: 'white',
                padding: '6px 12px',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onClick={() => handleOrderAction(order.id, actionItem.action)}
            >
              <IconComponent size={14} />
              {actionItem.label}
            </button>
          )
        })}
      </div>
    )
  }

  // Order filtering
  const getFilteredOrders = () => {
    switch (orderFilter) {
      case 'pending_payment':
        return safeOrders.filter(order => {
          const payment = safePayments.find(p => p.order_id === order.id)
          return order.status === 'awaiting_payment' && payment && payment.status === 'pending'
        })
      case 'active':
        return safeOrders.filter(order => !['delivered', 'cancelled'].includes(order.status))
      case 'delivered':
        return safeOrders.filter(order => order.status === 'delivered')
      case 'all':
        return safeOrders
      default:
        return safeOrders
    }
  }

  const filteredOrders = getFilteredOrders()

  // Products pagination logic
  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage
    return safeProducts.slice(startIndex, endIndex)
  }

  const totalPages = Math.ceil(safeProducts.length / productsPerPage)
  const paginatedProducts = getPaginatedProducts()

  // Statistics calculation (moved up to avoid duplication)
  const preparingOrders = safeOrders.filter(order => order.status === 'preparing').length
  const readyOrders = safeOrders.filter(order => order.status === 'ready_for_shipping').length
  const shippedOrders = safeOrders.filter(order => order.status === 'shipped').length

  return (
    <AdminSection>
      <Sidebar>
        <Logo>
          <Package size={24} />
          <h2>Mercado Express</h2>
        </Logo>
        <NavLinks>
          {navItems.map(item => (
            <NavItem
              key={item.id}
              className={activeTab === item.id ? 'active' : ''}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon size={18} />
              {item.label}
            </NavItem>
          ))}
          <NavItem onClick={logout}>
            <LogOut size={18} />
            Cerrar sesión
          </NavItem>
        </NavLinks>
      </Sidebar>

      <Content>
        <Header>
          <SearchBar>
            <Search size={16} />
            <input type="text" placeholder="Buscar..." />
          </SearchBar>
          <UserProfile>
            <span>Admin</span>
            <ProfileImg>A</ProfileImg>
          </UserProfile>
        </Header>

        <div>
          <TabContent $active={activeTab === 'dashboard'}>
            <h2>Dashboard</h2>
            <StatCards>
              <StatCard>
                <StatIcon style={{ backgroundColor: '#f59e0b' }}>
                  <Clock size={24} />
                </StatIcon>
                <StatInfo>
                  <h3>Esperando Pago</h3>
                  <p>{awaitingPaymentOrders}</p>
                </StatInfo>
              </StatCard>
              <StatCard>
                <StatIcon style={{ backgroundColor: '#ef4444' }}>
                  <AlertCircle size={24} />
                </StatIcon>
                <StatInfo>
                  <h3>Pagos por Verificar</h3>
                  <p>{pendingPayments}</p>
                </StatInfo>
              </StatCard>
              <StatCard>
                <StatIcon style={{ backgroundColor: '#3b82f6' }}>
                  <Package size={24} />
                </StatIcon>
                <StatInfo>
                  <h3>Preparando</h3>
                  <p>{preparingOrders}</p>
                </StatInfo>
              </StatCard>
              <StatCard>
                <StatIcon style={{ backgroundColor: '#06b6d4' }}>
                  <Truck size={24} />
                </StatIcon>
                <StatInfo>
                  <h3>Enviados</h3>
                  <p>{shippedOrders}</p>
                </StatInfo>
              </StatCard>
              <StatCard>
                <StatIcon style={{ backgroundColor: '#10b981' }}>
                  <Check size={24} />
                </StatIcon>
                <StatInfo>
                  <h3>Entregados</h3>
                  <p>{deliveredOrders}</p>
                </StatInfo>
              </StatCard>
              <StatCard>
                <StatIcon>
                  <Package size={24} />
                </StatIcon>
                <StatInfo>
                  <h3>Total productos</h3>
                  <p>{totalProducts}</p>
                </StatInfo>
              </StatCard>
              <StatCard>
                <StatIcon>
                  <CreditCard size={24} />
                </StatIcon>
                <StatInfo>
                  <h3>Ingresos</h3>
                  <p>S/ {formatPrice(totalIncome)}</p>
                </StatInfo>
              </StatCard>
            </StatCards>
            
            {/* 🚨 ALERTA DE PAGOS PENDIENTES */}
            {pendingPayments > 0 && (
              <div style={{ 
                backgroundColor: '#fef3c7', 
                border: '2px solid #f59e0b',
                borderRadius: 'var(--radius)', 
                padding: '20px', 
                margin: '20px 0',
                boxShadow: 'var(--shadow)' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ 
                    backgroundColor: '#f59e0b', 
                    color: 'white', 
                    borderRadius: '50%', 
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <AlertCircle size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#92400e', fontSize: '18px', fontWeight: '600' }}>
                      ⚠️ {pendingPayments} Pago{pendingPayments > 1 ? 's' : ''} Pendiente{pendingPayments > 1 ? 's' : ''} de Verificación
                    </h3>
                    <p style={{ margin: '0', color: '#78350f', fontSize: '14px' }}>
                      Hay pagos que necesitan verificación. Revisa la sección de Órdenes para aprobarlos.
                    </p>
                  </div>
                  <button 
                    style={{
                      backgroundColor: '#f59e0b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 20px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s'
                    }}
                    onClick={() => setActiveTab('orders')}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#d97706'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#f59e0b'}
                  >
                    <CreditCard size={16} />
                    Ver Pagos
                  </button>
                </div>
              </div>
            )}
            
            <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius)', padding: '20px', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--gray-dark)' }}>Pedidos recientes</h3>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Monto</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {safeOrders.slice(0, 5).map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{formatDate(order.date)}</td>
                      <td>S/ {formatPrice(order.total)}</td>
                      <td><Status className={order.status}>{getStatusText(order.status)}</Status></td>
                      <td>{getOrderActions(order)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TabContent>
          
          <TabContent $active={activeTab === 'categories'}>
            <TabHeader>
              <h2>Gestión de Categorías</h2>
              <button className="btn btn-primary" onClick={openCategoryModal}>
                <Plus size={16} />
                Nueva Categoría
              </button>
            </TabHeader>
            
            <CategoriesGrid>
              {safeCategories.filter(category => category && category.id).map(category => {
                const productCount = safeProducts.filter(product => product && product.category_id === category.id).length
                const IconComponent = getIconComponent(category.icon || 'Package')
                return (
                  <CategoryCard key={category.id}>
                    <CategoryIcon color={category.color || '#4A90E2'}>
                      <IconComponent size={30} />
                    </CategoryIcon>
                    <h3>{category.name}</h3>
                    <div style={{ fontSize: '14px', color: 'var(--gray)' }}>{productCount} productos</div>
                    <CategoryActions>
                      <ActionBtn className="edit" onClick={() => openEditCategoryModal(category)}>
                        <Edit size={14} />
                      </ActionBtn>
                      <ActionBtn className="delete" onClick={() => deleteCategory(category.id)}>
                        <Trash2 size={14} />
                      </ActionBtn>
                    </CategoryActions>
                  </CategoryCard>
                )
              })}
            </CategoriesGrid>
          </TabContent>
          
          <TabContent $active={activeTab === 'products'}>
            <TabHeader>
              <h2>Gestión de Productos</h2>
              <button className="btn btn-primary" onClick={openProductModal}>
                <Plus size={16} />
                Nuevo Producto
              </button>
            </TabHeader>
            
            <ProductsGrid>
              {paginatedProducts.map(product => {
                const category = safeCategories.find(c => c.id === product.category_id)
                return (
                  <ProductCard key={product.id}>
                    <ProductImage>
                      <OptimizedProductImage 
                        src={product.image} 
                        alt={product.name}
                      />
                    </ProductImage>
                    <ProductContent>
                      <ProductBadge color={category ? category.color : '#666'}>
                        {category ? category.name : 'Sin categoría'}
                      </ProductBadge>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductPrice>
                        S/ {formatPrice(product.price)} <span>/ {product.unit}</span>
                      </ProductPrice>
                      <ProductActions>
                        <button 
                          className="btn btn-secondary"
                          onClick={() => openEditProductModal(product)}
                        >
                          <Edit size={16} />
                          Editar
                        </button>
                        <button 
                          className="btn btn-danger"
                          onClick={() => deleteProduct(product.id)}
                        >
                          <Trash2 size={16} />
                          Eliminar
                        </button>
                      </ProductActions>
                    </ProductContent>
                  </ProductCard>
                )
              })}
            </ProductsGrid>
            
            {totalPages > 1 && (
              <PaginationContainer>
                <PaginationButton 
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Anterior
                </PaginationButton>
                
                <PaginationInfo>
                  Página {currentPage} de {totalPages} ({safeProducts.length} productos)
                </PaginationInfo>
                
                <PaginationButton 
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                </PaginationButton>
              </PaginationContainer>
            )}
          </TabContent>
          
          <TabContent $active={activeTab === 'orders'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2>Gestión de Pedidos</h2>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  className={`btn ${orderFilter === 'pending_payment' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setOrderFilter('pending_payment')}
                  style={{ 
                    fontSize: '14px',
                    backgroundColor: orderFilter === 'pending_payment' ? '#f59e0b' : undefined,
                    borderColor: orderFilter === 'pending_payment' ? '#f59e0b' : undefined,
                    position: 'relative'
                  }}
                >
                  {pendingPayments > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      fontSize: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '600'
                    }}>
                      {pendingPayments}
                    </span>
                  )}
                  🔔 Pagos Pendientes
                </button>
                <button 
                  className={`btn ${orderFilter === 'active' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setOrderFilter('active')}
                  style={{ fontSize: '14px' }}
                >
                  Activos ({activeOrders})
                </button>
                <button 
                  className={`btn ${orderFilter === 'delivered' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setOrderFilter('delivered')}
                  style={{ fontSize: '14px' }}
                >
                  Entregados ({deliveredOrders})
                </button>
                <button 
                  className={`btn ${orderFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setOrderFilter('all')}
                  style={{ fontSize: '14px' }}
                >
                  Todos ({safeOrders.length})
                </button>
              </div>
            </div>
            
            {orderFilter === 'pending_payment' && (
              <div style={{ 
                backgroundColor: '#fef3c7', 
                border: '2px solid #f59e0b',
                borderRadius: 'var(--radius)', 
                padding: '15px', 
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <AlertCircle size={20} style={{ color: '#f59e0b' }} />
                <div>
                  <strong style={{ color: '#92400e' }}>Mostrando órdenes con pagos pendientes de verificación</strong>
                  <p style={{ margin: '5px 0 0 0', color: '#78350f', fontSize: '14px' }}>
                    💡 <strong>Haz click en el badge "🔔 Esperando Pago"</strong> para abrir el modal de verificación.
                  </p>
                </div>
              </div>
            )}
            
            <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius)', padding: '20px', boxShadow: 'var(--shadow)' }}>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Teléfono</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Estado</th>
                    <th>Pago</th>
                    <th>Proceso de Entrega</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.customer_phone}</td>
                      <td>{formatDate(order.date)}</td>
                      <td>S/ {formatPrice(order.total)}</td>
                      <td>
                        {order.status === 'awaiting_payment' ? (
                          <button
                            style={{ 
                              background: getStatusColor(order.status), 
                              color: 'white',
                              fontWeight: '500',
                              border: 'none',
                              borderRadius: 'var(--radius)',
                              padding: '4px 12px',
                              fontSize: '12px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              position: 'relative',
                              overflow: 'hidden'
                            }}
                            onClick={() => handleOpenPaymentModal(order)}
                            onMouseOver={(e) => {
                              e.target.style.transform = 'scale(1.05)'
                              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'
                            }}
                            onMouseOut={(e) => {
                              e.target.style.transform = 'scale(1)'
                              e.target.style.boxShadow = 'none'
                            }}
                            title="Click para verificar pago"
                          >
                            🔔 {getStatusText(order.status)}
                          </button>
                        ) : (
                          <Status style={{ 
                            background: getStatusColor(order.status), 
                            color: 'white',
                            fontWeight: '500'
                          }}>
                            {getStatusText(order.status)}
                          </Status>
                        )}
                      </td>
                      <td><Status className={order.payment_status === 'verified' ? 'completed' : 'pending'}>
                        {order.payment_status === 'verified' ? 'Verificado' : 'Pendiente'}
                      </Status></td>
                      <td>{renderWorkflowVisualizer(order)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TabContent>
          
          <TabContent $active={activeTab === 'payments'}>
            <h2>Historial de Pagos</h2>
            <p style={{ color: '#6b7280', marginBottom: '20px', fontSize: '14px' }}>
              📋 Historial de pagos procesados (aprobados y rechazados). Los pagos pendientes de verificación se manejan desde la sección de Pedidos.
            </p>
            
            <div style={{ backgroundColor: 'white', borderRadius: 'var(--radius)', padding: '20px', boxShadow: 'var(--shadow)' }}>
              <Table>
                <thead>
                  <tr>
                    <th>ID Pedido</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Monto</th>
                    <th>Método</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {safePayments.filter(payment => payment.status !== 'pending').map(payment => (
                    <tr key={payment.id}>
                      <td>{payment.order_id}</td>
                      <td>{payment.customer}</td>
                      <td>{formatDate(payment.date)}</td>
                      <td>S/ {formatPrice(payment.amount)}</td>
                      <td>{getPaymentMethodText(payment.method)}</td>
                      <td>
                        <Status className={
                          payment.status === 'verified' ? 'completed' : 
                          payment.status === 'rejected' ? 'pending' : 'pending'
                        } style={
                          payment.status === 'rejected' ? { background: '#fee2e2', color: '#dc2626' } : {}
                        }>
                          {payment.status === 'verified' ? 'Verificado' : 
                           payment.status === 'rejected' ? 'Rechazado' : 'Pendiente'}
                        </Status>
                      </td>
                      <td>
                        {payment.voucher ? (
                          <button 
                            className="btn btn-secondary"
                            onClick={() => openPaymentModal(payment, 'view')}
                            style={{ fontSize: '12px', padding: '4px 8px' }}
                          >
                            <Eye size={14} />
                            Ver Comprobante
                          </button>
                        ) : (
                          <span style={{ color: '#6b7280', fontSize: '13px' }}>Sin comprobante</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TabContent>
        </div>
      </Content>

      {/* Category Modal */}
      {showCategoryModal && (
        <ModalOverlay onClick={closeCategoryModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>
              <Tags size={24} />
              {editingCategory ? 'Editar Categoría' : 'Nueva Categoría'}
            </h2>
            
            <form onSubmit={handleCategorySubmit}>
              <FormGroup>
                <label>Nombre de la categoría *</label>
                <input 
                  type="text" 
                  value={categoryForm.name}
                  onChange={(e) => setCategoryForm({...categoryForm, name: e.target.value})}
                  placeholder="Ej. Frutas y verduras"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label>Ícono</label>
                <IconPicker>
                  {availableIcons.map(icon => {
                    const IconComponent = icon.component
                    return (
                      <IconOption 
                        key={icon.name}
                        $selected={categoryForm.icon === icon.name}
                        onClick={() => setCategoryForm({...categoryForm, icon: icon.name})}
                        title={icon.label}
                      >
                        <IconComponent size={24} />
                        <div className="icon-label">{icon.label}</div>
                      </IconOption>
                    )
                  })}
                </IconPicker>
              </FormGroup>
              
              <FormGroup>
                <label>Color</label>
                <ColorPicker>
                  {availableColors.map(color => (
                    <ColorOption 
                      key={color}
                      style={{ backgroundColor: color }}
                      $selected={categoryForm.color === color}
                      onClick={() => setCategoryForm({...categoryForm, color})}
                    />
                  ))}
                </ColorPicker>
              </FormGroup>
              
              <ModalActions>
                <button type="button" className="btn btn-secondary" onClick={closeCategoryModal}>
                  <X size={16} />
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  <Save size={16} />
                  {editingCategory ? 'Actualizar Categoría' : 'Crear Categoría'}
                </button>
              </ModalActions>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Product Modal */}
      {showProductModal && (
        <ModalOverlay onClick={closeProductModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>
              <Package size={24} />
              {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
            </h2>
            
            <form onSubmit={handleProductSubmit}>
              <FormGroup>
                <label>Nombre del producto *</label>
                <input 
                  type="text" 
                  value={productForm.name}
                  onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                  placeholder="Ej. Manzana roja"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label>Categoría *</label>
                <select 
                  value={productForm.category_id}
                  onChange={(e) => setProductForm({...productForm, category_id: e.target.value})}
                  required
                >
                  <option value="">Seleccionar categoría</option>
                  {safeCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </FormGroup>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <FormGroup>
                  <label>Precio *</label>
                  <input 
                    type="number" 
                    step="0.01"
                    value={productForm.price}
                    onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                    placeholder="0.00"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>Unidad *</label>
                  <select 
                    value={productForm.unit}
                    onChange={(e) => handleUnitChange(e.target.value)}
                    required
                  >
                    <option value="">Seleccionar</option>
                    <option value="kg">Kilogramo (kg)</option>
                    <option value="u">Unidad (u)</option>
                    <option value="l">Litro (l)</option>
                    <option value="g">Gramo (g)</option>
                    <option value="paq">Paquete (paq)</option>
                    <option value="PRESENTATION">Presentaciones (productos envasados)</option>
                  </select>
                </FormGroup>
              </div>
              
              {showPresentations && (
                <PresentationSection>
                  <h4>📦 Presentaciones del Producto</h4>
                  <p style={{ marginBottom: '15px', color: 'var(--gray)', fontSize: '14px' }}>
                    Agrega las diferentes presentaciones disponibles (ej: 500ml, 1L, 2.5L)
                  </p>
                  
                  <PresentationForm>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: '500' }}>
                        Nombre de presentación
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Botella 500ml"
                        value={currentPresentation.name}
                        onChange={(e) => setCurrentPresentation(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: '500' }}>
                        Precio
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={currentPresentation.price}
                        onChange={(e) => setCurrentPresentation(prev => ({ ...prev, price: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontSize: '13px', fontWeight: '500' }}>
                        Unidad
                      </label>
                      <select
                        value={currentPresentation.unit}
                        onChange={(e) => setCurrentPresentation(prev => ({ ...prev, unit: e.target.value }))}
                      >
                        <option value="">Seleccionar</option>
                        <option value="ml">Mililitro (ml)</option>
                        <option value="L">Litro (L)</option>
                        <option value="g">Gramo (g)</option>
                        <option value="kg">Kilogramo (kg)</option>
                        <option value="lata">Lata</option>
                        <option value="botella">Botella</option>
                        <option value="pack">Pack</option>
                        <option value="pqt">Paquete</option>
                        <option value="bolsa">Bolsa</option>
                      </select>
                    </div>
                    <button
                      type="button"
                      onClick={addPresentation}
                      disabled={!currentPresentation.name || !currentPresentation.price || !currentPresentation.unit}
                    >
                      <Plus size={16} />
                    </button>
                  </PresentationForm>
                  
                  {productForm.presentations.length > 0 && (
                    <PresentationList>
                      {productForm.presentations.map(presentation => (
                        <PresentationItem key={presentation.id}>
                          <div className="info">
                            <span className="name">{presentation.name}</span>
                            <span className="price">S/ {formatPrice(presentation.price)}</span>
                            <span className="unit">/ {presentation.unit}</span>
                          </div>
                          <div className="actions">
                            <button
                              type="button"
                              className="delete"
                              onClick={() => removePresentation(presentation.id)}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </PresentationItem>
                      ))}
                    </PresentationList>
                  )}
                  
                  {productForm.presentations.length === 0 && (
                    <div style={{ 
                      textAlign: 'center', 
                      padding: '20px', 
                      color: 'var(--gray)', 
                      fontSize: '14px',
                      fontStyle: 'italic'
                    }}>
                      No hay presentaciones agregadas. Agrega al menos una presentación.
                    </div>
                  )}
                </PresentationSection>
              )}
              
              <FormGroup>
                <label>Imagen del producto</label>
                <ImageUploadContainer>
                  {/* ELIMINADO: Tabs de URL vs Archivo - Solo archivo */}
                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                      <Camera size={16} style={{ marginRight: '5px' }} />
                      Imagen del producto
                    </label>
                  </div>
                  
                  {/* Solo upload de archivos */}
                  {!uploadedFile ? (
                        <FileUploadArea
                          onClick={() => document.getElementById('fileInput').click()}
                          onDrop={(e) => {
                            e.preventDefault()
                            const file = e.dataTransfer.files[0]
                            handleFileUpload(file)
                          }}
                          onDragOver={(e) => {
                            e.preventDefault()
                            e.currentTarget.classList.add('dragover')
                          }}
                          onDragLeave={(e) => {
                            e.currentTarget.classList.remove('dragover')
                          }}
                        >
                          <Upload size={32} style={{ color: '#94a3b8', marginBottom: '10px' }} />
                          <p style={{ margin: '0 0 5px 0', fontWeight: '500', color: '#374151' }}>
                            Haz click o arrastra una imagen aquí
                          </p>
                          <p style={{ margin: '0', fontSize: '12px', color: '#6b7280' }}>
                            PNG, JPG, GIF hasta 10MB
                          </p>
                          <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e.target.files[0])}
                          />
                        </FileUploadArea>
                      ) : (
                        <ImagePreview>
                          <img src={uploadedFile.dataUrl} alt="Preview" />
                          <ImageInfo>
                            <div className="filename">{uploadedFile.name}</div>
                            <div className="filesize">{formatFileSize(uploadedFile.size)}</div>
                          </ImageInfo>
                          <RemoveImageButton onClick={removeUploadedImage}>
                            <X size={14} />
                          </RemoveImageButton>
                        </ImagePreview>
                      )}
                </ImageUploadContainer>
              </FormGroup>
              
              <FormGroup>
                <label>Descripción</label>
                <textarea 
                  value={productForm.description}
                  onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                  placeholder="Describe las características del producto..."
                />
              </FormGroup>
              
              <ModalActions>
                <button type="button" className="btn btn-secondary" onClick={closeProductModal}>
                  <X size={16} />
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  <Save size={16} />
                  {editingProduct ? 'Actualizar Producto' : 'Crear Producto'}
                </button>
              </ModalActions>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Payment Verification Modal - Diseño Mejorado */}
      {showPaymentModal && selectedPayment && (
        <ModalOverlay onClick={closePaymentModal}>
          <PaymentModal onClick={(e) => e.stopPropagation()}>
            <PaymentModalHeader>
              <h2>
                <CreditCard size={28} />
                Verificación de Pago
              </h2>
              <button className="close-btn" onClick={closePaymentModal}>
                <X size={20} />
              </button>
            </PaymentModalHeader>
            
            <PaymentModalBody>
              {/* Información del Cliente */}
              <CustomerInfo>
                <h3>
                  <User size={20} />
                  Información del Cliente
                </h3>
                <div className="customer-details">
                  <div className="customer-field">
                    <div className="field-label">Cliente</div>
                    <div className="field-value">{selectedPayment.customer || selectedPayment.customer_name}</div>
                  </div>
                  <div className="customer-field">
                    <div className="field-label">Teléfono</div>
                    <div className="field-value">{selectedPayment.customer_phone}</div>
                  </div>
                  <div className="customer-field">
                    <div className="field-label">Fecha del Pedido</div>
                    <div className="field-value">{formatDate(selectedPayment.date)}</div>
                  </div>
                  <div className="customer-field">
                    <div className="field-label">ID del Pedido</div>
                    <div className="field-value">{selectedPayment.order_id}</div>
                  </div>
                </div>
              </CustomerInfo>

              {/* 🛒 PRODUCTOS DEL PEDIDO */}
              {selectedOrder && selectedOrder.items ? (
                  <div style={{ 
                    marginBottom: '25px',
                    padding: '20px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <h3 style={{ 
                      color: '#374151',
                      marginBottom: '15px',
                      fontSize: '16px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <ShoppingBasket size={20} />
                      Productos del Pedido ({selectedOrder.items.length})
                    </h3>
                    <div style={{ 
                      display: 'grid',
                      gap: '12px'
                    }}>
                      {selectedOrder.items.map((item, index) => (
                        <div key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          padding: '15px',
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          border: '1px solid #e5e7eb'
                        }}>
                          <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            backgroundColor: '#f3f4f6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            {item.product?.image ? (
                              <img 
                                src={item.product.image} 
                                alt={item.product_name}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                              />
                            ) : (
                              <Package size={24} style={{ color: '#9ca3af' }} />
                            )}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ 
                              fontWeight: '600',
                              color: '#374151',
                              marginBottom: '4px'
                            }}>
                              {item.product_name}
                            </div>
                            <div style={{
                              fontSize: '14px',
                              color: '#6b7280',
                              marginBottom: '4px'
                            }}>
                              {item.presentation_info ? 
                                `${item.presentation_info.name} - ${item.presentation_info.unit}` :
                                'Producto estándar'
                              }
                            </div>
                            <div style={{
                              fontSize: '13px',
                              color: '#9ca3af'
                            }}>
                              Cantidad: {parseFloat(item.quantity)} • Precio: S/ {formatPrice(item.price)}
                            </div>
                          </div>
                          <div style={{
                            textAlign: 'right',
                            flexShrink: 0
                          }}>
                            <div style={{
                              fontSize: '16px',
                              fontWeight: '600',
                              color: '#059669'
                            }}>
                              S/ {formatPrice(item.total)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{
                      marginTop: '15px',
                      padding: '15px',
                      backgroundColor: '#dbeafe',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontWeight: '600'
                    }}>
                      <span style={{ color: '#1e40af' }}>Total del Pedido:</span>
                      <span style={{ color: '#1e40af', fontSize: '18px' }}>S/ {formatPrice(selectedOrder.total)}</span>
                    </div>
                  </div>
                ) : null}

              {/* Detalles del Pago */}
              <PaymentDetails>
                <DetailCard>
                  <div className="detail-label">ID de Pago</div>
                  <div className="detail-value">{selectedPayment.id}</div>
                </DetailCard>

                <DetailCard>
                  <div className="detail-label">Método de Pago</div>
                  <div className="detail-value">
                    <PaymentMethodBadge className={selectedPayment.method?.toLowerCase()}>
                      {getPaymentMethodIcon(selectedPayment.method)}
                      {getPaymentMethodText(selectedPayment.method)}
                    </PaymentMethodBadge>
                  </div>
                </DetailCard>

                <DetailCard className="status-card">
                  <div className="detail-label">Estado del Pago</div>
                  <div className="detail-value">
                    <StatusBadge className={selectedPayment.status}>
                      {selectedPayment.status === 'verified' && <Check size={16} />}
                      {selectedPayment.status === 'rejected' && <XCircle size={16} />}
                      {selectedPayment.status === 'pending' && <Clock size={16} />}
                      {selectedPayment.status === 'verified' ? 'Verificado' : 
                       selectedPayment.status === 'rejected' ? 'Rechazado' : 'Pendiente'}
                    </StatusBadge>
                  </div>
                </DetailCard>

                <DetailCard>
                  <div className="detail-label">Fecha de Pago</div>
                  <div className="detail-value">{formatDate(selectedPayment.date)}</div>
                </DetailCard>

                <DetailCard className="amount-card">
                  <div className="detail-label">Monto Total</div>
                  <div className="detail-value">
                    <DollarSign size={24} />
                    S/ {formatPrice(selectedPayment.amount)}
                  </div>
                </DetailCard>
              </PaymentDetails>

              {/* Sección del Comprobante */}
              <VoucherSection>
                <h3 className="voucher-title">
                  <ImageIcon size={20} />
                  Comprobante de Pago
                </h3>
                <div className={`voucher-container ${selectedPayment.voucher ? 'has-voucher' : 'cash-payment'}`}>
                  {selectedPayment.voucher ? (
                    <img 
                      src={selectedPayment.voucher} 
                      alt="Comprobante de pago"
                      className="voucher-image"
                      onClick={() => window.open(selectedPayment.voucher, '_blank')}
                    />
                  ) : (
                    <div className="no-voucher">
                      <div className="cash-icon">
                        <DollarSign size={32} />
                      </div>
                      <div className="cash-title">Pago en Efectivo</div>
                      <div className="cash-subtitle">Contra Entrega</div>
                      <div className="cash-note">
                        El cliente pagará el monto total al momento de la entrega
                      </div>
                    </div>
                  )}
                </div>
              </VoucherSection>

              {/* Acciones del Pago */}
              <StatusActions>
                {/* First step: Verify payment when status is pending */}
                {paymentModalMode === 'verify' && selectedPayment.status === 'pending' && (
                  <>
                    <button 
                      className="action-btn verify"
                      onClick={() => verifyPayment(selectedPayment.id)}
                    >
                      <Check size={20} />
                      {selectedPayment.voucher ? 'Verificar Pago' : 'Verificar Pedido en Efectivo'}
                    </button>
                    <button 
                      className="action-btn reject"
                      onClick={() => rejectPayment(selectedPayment.id)}
                    >
                      <XCircle size={20} />
                      {selectedPayment.voucher ? 'Rechazar Pago' : 'Cancelar Pedido'}
                    </button>
                  </>
                )}

                {/* Second step: Confirm preparation when payment is verified but order is still awaiting payment */}
                {selectedPayment.status === 'verified' && 
                 (() => {
                   const order = safeOrders.find(o => o.id === selectedPayment.order_id)
                   return order && order.status === 'awaiting_payment'
                 })() && (
                  <>
                    <div style={{ 
                      textAlign: 'center', 
                      padding: '16px',
                      background: '#dbeafe',
                      borderRadius: '12px',
                      marginBottom: '16px',
                      border: '2px solid #3b82f6'
                    }}>
                      <Check size={20} style={{ color: '#1d4ed8', marginBottom: '8px' }} />
                      <div style={{ color: '#1e40af', fontWeight: '600', fontSize: '14px' }}>
                        ✅ Pago Verificado
                      </div>
                      <div style={{ color: '#1e3a8a', fontSize: '13px', marginTop: '4px' }}>
                        ¿Confirmar inicio de preparación del pedido?
                      </div>
                    </div>
                    <button 
                      className="action-btn confirm"
                      onClick={() => confirmPaymentPreparation(selectedPayment.id)}
                    >
                      <ShoppingBasket size={20} />
                      Confirmar y Iniciar Preparación
                    </button>
                  </>
                )}
                
                {paymentModalMode === 'verify' && selectedPayment.status === 'pending' && !selectedPayment.voucher && (
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '16px',
                    background: '#fffbeb',
                    borderRadius: '12px',
                    marginBottom: '20px',
                    border: '2px solid #fbbf24'
                  }}>
                    <AlertCircle size={20} style={{ color: '#92400e', marginBottom: '8px' }} />
                    <div style={{ color: '#92400e', fontWeight: '600', fontSize: '14px' }}>
                      ⚠️ Pedido con Pago en Efectivo
                    </div>
                    <div style={{ color: '#78350f', fontSize: '13px', marginTop: '4px' }}>
                      El cliente debe pagar S/ {formatPrice(selectedPayment.amount)} al momento de la entrega
                    </div>
                  </div>
                )}
                
                {selectedPayment.status === 'verified' && 
                 (() => {
                   const order = safeOrders.find(o => o.id === selectedPayment.order_id)
                   return order && order.status === 'preparing'
                 })() && (
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '20px',
                    background: '#d1fae5',
                    borderRadius: '12px',
                    color: '#065f46',
                    fontWeight: '600'
                  }}>
                    <Check size={24} style={{ marginBottom: '8px' }} />
                    <div>Pago Confirmado - Pedido en Preparación</div>
                    <small style={{ fontWeight: '400', opacity: '0.8' }}>
                      El pedido ha sido confirmado y está siendo preparado
                    </small>
                  </div>
                )}
                
                {selectedPayment.status === 'rejected' && (
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '20px',
                    background: '#fee2e2',
                    borderRadius: '12px',
                    color: '#991b1b',
                    fontWeight: '600'
                  }}>
                    <XCircle size={24} style={{ marginBottom: '8px' }} />
                    <div>Pago Rechazado</div>
                    <small style={{ fontWeight: '400', opacity: '0.8' }}>
                      El pedido ha sido cancelado
                    </small>
                  </div>
                )}
              </StatusActions>
            </PaymentModalBody>
          </PaymentModal>
        </ModalOverlay>
      )}
    </AdminSection>
  )
}

export default AdminDashboard