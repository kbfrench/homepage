module FrankHelpers
  def active_if(regex)
    @request.path =~ regex ? 'active' : ''
  end
end