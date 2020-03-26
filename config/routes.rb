# frozen_string_literal: true

Rails.application.routes.draw do
  get 'pc_wars(/:path)', to: 'pc_wars#index', as: 'pc_wars'
  devise_for :users
  resources :games

  root to: 'welcome#index'

  get 'welcome', to: 'welcome#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
