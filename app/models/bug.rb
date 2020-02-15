class Bug < ApplicationRecord
  belongs_to :user, optional: false
  enum Issue_type: [ :issue, :enhancement, :feature]
  enum Priority: [:low, :medium, :high]
  enum Status: [ :open, :closed, :monitor]


  after_initialize do
    if self.new_record?
      self.Issue_type ||= :feature
      self.Priority ||= :medium
      self.Status  ||= :open
    end
  end
  
  validates :Title, presence: true, length: {minimum: 5, maximum: 15}
  validates :Description, presence: true, length: {minimum: 20, maximum: 600}
end
