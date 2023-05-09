# frozen_string_literal: true

Rails.application.routes.draw do
  root 'react_test#index'
  # get 'react_test/index'
  # get 'welcome/index'

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :guests, only: %i[create]
    end
  end

  # Remove or comment out the following line:
  # root 'welcome#index'
end
