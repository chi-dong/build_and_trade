# frozen_string_literal: true

class Game < ApplicationRecord
  validates_presence_of :title
end
