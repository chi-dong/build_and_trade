# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Game, type: :model do
  describe 'validations' do
    it 'requires title to be set' do
      expect(subject.valid?).to_not be
      expect(subject.errors[:title].size).to eq(1)
    end
  end
end
